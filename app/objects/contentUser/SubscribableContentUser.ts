// // tslint:disable max-classes-per-file
// // tslint:disable no-empty-interface
import {inject, injectable} from 'inversify';
import {
    IContentUserData,
    ISubscribableContentUser,
    ISubscribableMutableField,
    IValUpdates,
} from '../interfaces';
import {PROFICIENCIES} from '../proficiency/proficiencyEnum';
import {Subscribable} from '../subscribable/Subscribable';
import {TYPES} from '../types'

@injectable()
export class SubscribableContentUser extends Subscribable<IValUpdates> implements ISubscribableContentUser {
    private publishing = false
    public id: string
    public overdue: ISubscribableMutableField<boolean>;
    public timer: ISubscribableMutableField<number>;
    public proficiency: ISubscribableMutableField<PROFICIENCIES>;
    public lastRecordedStrength: ISubscribableMutableField<number>;

    // TODO: should the below three objects be private?
    public val(): IContentUserData {
        return {
            id: this.id,
            lastRecordedStrength: this.lastRecordedStrength.val(),
            overdue: this.overdue.val(),
            proficiency: this.proficiency.val(),
            timer: this.timer.val(),
        }
    }
    constructor(@inject(TYPES.SubscribableContentUserArgs) {
        updatesCallbacks, id, overdue, proficiency, timer, lastRecordedStrength
    }: SubscribableContentUserArgs) {
        super({updatesCallbacks})
        this.id = id
        this.overdue = overdue
        this.proficiency = proficiency
        this.timer = timer
        this.lastRecordedStrength = lastRecordedStrength
    }
    protected callbackArguments(): IValUpdates {
        return this.val()
    }
    public startPublishing() {
        if (this.publishing) {
            return
        }
        this.publishing = true
        const boundCallCallbacks = this.callCallbacks.bind(this)
        this.overdue.onUpdate(boundCallCallbacks)
        this.proficiency.onUpdate(boundCallCallbacks)
        this.timer.onUpdate(boundCallCallbacks)
        this.lastRecordedStrength.onUpdate(boundCallCallbacks)
    }
}

@injectable()
export class SubscribableContentUserArgs {
    @inject(TYPES.Array) public updatesCallbacks: Array<Function>
    @inject(TYPES.String) public id: string
    @inject(TYPES.ISubscribableMutableNumber) public lastRecordedStrength: ISubscribableMutableField<number>
    @inject(TYPES.ISubscribableMutableBoolean) public overdue: ISubscribableMutableField<boolean>
    @inject(TYPES.ISubscribableMutableProficiency) public proficiency: ISubscribableMutableField<PROFICIENCIES>
    @inject(TYPES.ISubscribableMutableNumber) public timer: ISubscribableMutableField<number>
}
