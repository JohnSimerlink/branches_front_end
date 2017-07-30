import {Trees} from '../../objects/trees'
import {Facts} from '../../objects/facts'
import {Fact} from '../../objects/fact'
import timers from './timers'
import PubSub from 'pubsub-js'
export default {
    template: require('./tree.html'), // '<div> {{movie}} this is the tree template</div>',
    props: ['movie', 'id'],
    created () {
        var self = this;

        this.editing = false
        this.tree = {} // init to empty object until promises resolve, so vue does not complain
        this.fact = {}
        Trees.get(this.id).then( (tree) => {
            self.tree = tree
            Facts.get(tree.factId).then((fact) =>{
                self.fact = fact
                this.startTimer()
            })
        })
        PubSub.subscribe('canvas.clicked', () => {
            self.saveTimer()
        })
    },
    data () {
        return {
             tree: this.tree
            , fact: this.fact
        }
    },
    methods: {
        startTimer() {
            var self = this
            if (!timers[this.fact.id]){ // to prevent two timers from being set on the same fact simultaneously (two back to back mousevers in sigmajs will do that, causing two seconds to increment every one second
                setInterval(function(){
                    self.fact.timeElapsedForCurrentUser = self.fact.timeElapsedForCurrentUser || 0
                    self.fact.timeElapsedForCurrentUser++ // = fact.timeElapsedForCurrentUser || 0
                    // console.log('increment', self.x, self.y)
                }, 1000)

                timers[this.fact.id] = true
            }
        },
        saveTimer() {
            this.fact.setTimerForUser && this.fact.setTimerForUser(this.fact.timeElapsedForCurrentUser)
            timers[this.fact.id] = false
        },
        toggleEditing() {
            this.editing = !this.editing
        },
        changeFactForTree() {
            this.fact = Facts.create({question: this.fact.question, answer: this.fact.answer})
            this.fact.addTree(this.id)
            this.tree.changeFact(this.fact.id)
            this.toggleEditing()
        }
    },
}