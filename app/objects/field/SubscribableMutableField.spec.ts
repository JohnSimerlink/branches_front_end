import {expect} from 'chai'
import * as sinon from 'sinon'
import {myContainer} from '../../../inversify.config';
import {FieldMutationTypes, IDatedMutation} from '../interfaces';
import {ISubscribableMutableField} from '../interfaces';
import {TYPES} from '../types';
import {SubscribableMutableField} from './SubscribableMutableField';

describe('SubscribableMutableField > Subscribable', () => {
    it('Adding a mutation, should trigger an update for one of the subscribers [is this an integration test?]', () => {
        // const subscribableMutableId: ISubscribableMutableField =
        //     myContainer.get<ISubscribableMutableField>(TYPES.ISubscribableMutableField)
        /* TODO: ^^^ USING THE ABOVE dependency injection fetcher fetches like an IDetailedUpdates object
        * and places it into the updatesCallbacks array, which causes a type error because ISubscribable
        * tries to invoke one of the updates, and the update is just an object not a function . . . .
        * */
        const subscribableMutableId: ISubscribableMutableField<string> = new SubscribableMutableField<string>()
        const callback = sinon.spy() // (updates: IDetailedUpdates) => void 0
        expect(typeof callback).to.equal('function')
        const sampleMutation = myContainer.get<IDatedMutation<FieldMutationTypes>>(TYPES.IDatedMutation)
        subscribableMutableId.onUpdate(callback)
        subscribableMutableId.addMutation(sampleMutation)
        expect(callback.callCount).to.equal(1)
    })
})
describe('SubscribableMutableField > MutableField', () => {
    const INIT_ID = 'abc123'
    const NEW_ID = 'def456'
    const FIRST_SUCCESSFUL_MUTATION = {
        data: NEW_ID, timestamp: Date.now(), type: FieldMutationTypes.SET
    }
    const id = new SubscribableMutableField<string>({field: INIT_ID})

    // TESTS with empty mutation history
    it(`INIT should setId
    AND set mutations length to 0`, () => {
        expect(id.val()).to.equal(INIT_ID)
        expect(id.mutations().length).to.equal(0)
    })
    it('ADD MUTATION SET should change Id ' +
        'and increment num mutations', () => {
        id.addMutation(FIRST_SUCCESSFUL_MUTATION)
        expect(id.val()).to.deep.equal(NEW_ID)
        expect(id.mutations().length).to.equal(1)
    })
})
