import {expect} from 'chai'
import * as sinon from 'sinon'
import {myContainer} from '../../../inversify.config';
import {SubscribableMutableId} from '../id/SubscribableMutableId';
import {IDatedMutation, IdMutationTypes, IProppedDatedMutation, TreePropertyNames} from '../interfaces';
import {SubscribableMutableStringSet} from '../set/SubscribableMutableStringSet';
import {SubscribableTree} from '../tree/SubscribableTree';
import {TYPES} from '../types';
import {ISubscribableTreeDataStore} from './SubscribableTreeDataStore';

describe('SubscribableTreeDataStore > addAndSubscribeToItem', () => {
    it('An update in a member tree should be published to a subscriber of the tree data store', () => {
        /* TODO: Note this is more of an integration test than a true unit test.
        It might be that some of these modules are designed poorly, being the reason
         why I couldn't find an easy way to do a pure unit test.
         e.g. rather than just triggering an update directly on tree, I had to do it indirectly by adding a mutation
         */
        const contentId = new SubscribableMutableId()
        const parentId = new SubscribableMutableId()
        const children = new SubscribableMutableStringSet()
        const TREE_ID = 'efa123'
        const tree = new SubscribableTree({updatesCallbacks: [], id: TREE_ID, contentId, parentId, children})
        // const tree = myContainer.get<ISubscribableTree>(TYPES.ISubscribableTree)
        // <<< TODO: using this dependency injection causes this entire test to fail. WHY?
        tree.publishUponDescendantUpdates()
        const treeStore = myContainer.get<ISubscribableTreeDataStore>(TYPES.ISubscribableTreeDataStore)
        const callback1 = sinon.spy()
        const callback2 = sinon.spy()

        treeStore.onUpdate(callback2)
        treeStore.onUpdate(callback1)
        treeStore.addAndSubscribeToItem({id: TREE_ID, item: tree})

        const sampleMutation = myContainer.get<
            IProppedDatedMutation<
                IdMutationTypes,
                TreePropertyNames
            >
        >(TYPES.IProppedDatedMutation)

        // try {
        tree.addMutation(sampleMutation)

        const treeNewVal = tree.val()
        // } catch (err) {
        //     expect(err).to.equal(5)
        // }

        // expect(true).to.equal(false)
        expect(callback1.callCount).to.equal(1)
        expect(callback1.getCall(0).args[0].id).to.equal(TREE_ID)
        expect(callback1.getCall(0).args[0].val).to.deep.equal(treeNewVal)
        expect(callback2.callCount).to.equal(1)
        expect(callback2.getCall(0).args[0].id).to.equal(TREE_ID)
        expect(callback2.getCall(0).args[0].val).to.deep.equal(treeNewVal)
    })
})