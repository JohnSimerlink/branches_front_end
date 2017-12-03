import {Container} from 'inversify'
import 'reflect-metadata'
import {ContentUserData, ContentUserDataArgs} from './app/objects/contentUserData/ContentUserData';
import {GlobalDataStoreArgs, SubscribableGlobalDataStore} from './app/objects/dataStores/SubscribableGlobalDataStore';
import {
    ISubscribableTreeDataStore, SubscribableDataStoreArgs,
    SubscribableTreeDataStore
} from './app/objects/dataStores/SubscribableTreeDataStore';
import {FirebaseRef} from './app/objects/dbSync/FirebaseRef';
import {FirebaseSaverArgs} from './app/objects/dbSync/FirebaseSaver';
import {SyncToDB, SyncToDBArgs} from './app/objects/dbSync/SyncToDB';
import {
    SubscribableMutableField,
    SubscribableMutableFieldArgs
} from './app/objects/field/SubscribableMutableField';
import {
    FieldMutationTypes, IColorSlice, IContentUserData, IDatabaseSyncer, IDetailedUpdates,
    IFirebaseRef, IMutableStringSet, IProficiencyStats, IProppedDatedMutation, ISaveUpdatesToDBFunction,
    ISigmaNode, ISubscribableContentUser,
    ISubscribableMutableField, ISubscribableMutableStringSet, ISubscribableTreeCore, ITree,
    radian,
    TreePropertyNames
} from './app/objects/interfaces';
import {fGetSigmaIdsForContentId, ISigmaNodeHandler, ISubscribableGlobalDataStore} from './app/objects/interfaces';
import {IDatedMutation} from './app/objects/interfaces';
import {PROFICIENCIES} from './app/objects/proficiency/proficiencyEnum';
import {defaultProficiencyStats} from './app/objects/proficiencyStats/IProficiencyStats';
import {
    SubscribableMutableStringSet,
    SubscribableMutableStringSetArgs
} from './app/objects/set/SubscribableMutableStringSet';
import {ColorSlice} from './app/objects/sigmaNode/ColorSlice';
import {SigmaNode, SigmaNodeArgs} from './app/objects/sigmaNode/SigmaNode';
import {SigmaNodeHandler, SigmaNodeHandlerArgs} from './app/objects/sigmaNode/SigmaNodeHandler';
import {
    SigmaNodeHandlerSubscriber,
    SigmaNodeHandlerSubscriberArgs
} from './app/objects/sigmaNode/SigmaNodeHandlerSubscriber';
import {SubscribableArgs} from './app/objects/subscribable/Subscribable';
import {DBSubscriberToTreeArgs} from './app/objects/tree/DBSubscriberToTree';
import {SubscribableTree, SubscribableTreeArgs} from './app/objects/tree/SubscribableTree';
import {TYPES} from './app/objects/types'
import {UIColor} from './app/objects/uiColor';
import {TREE_ID3} from './app/testHelpers/testHelpers';
import {
    SubscribableContentUser,
    SubscribableContentUserArgs
} from './app/objects/contentUserData/SubscribableContentUser';

const myContainer = new Container()
// myContainer.bind<IActivatableDatedMutation>(TYPES.IActivatableDatedMutation).to(ActivatableDatedMutation)
myContainer.bind<any>(TYPES.Any).toConstantValue(null)
myContainer.bind<boolean>(TYPES.Boolean).toConstantValue(false)
myContainer.bind<ContentUserDataArgs>(TYPES.ContentUserDataArgs).to(ContentUserDataArgs)
myContainer.bind<DBSubscriberToTreeArgs>(TYPES.DBSubscriberToTreeArgs).to(DBSubscriberToTreeArgs)
myContainer.bind<fGetSigmaIdsForContentId>(TYPES.fGetSigmaIdsForContentId).toConstantValue(() => [])
myContainer.bind<FirebaseSaverArgs>(TYPES.FirebaseSaverArgs).to(FirebaseSaverArgs)
myContainer.bind<GlobalDataStoreArgs>(TYPES.SubscribableGlobalDataStoreArgs).to(GlobalDataStoreArgs)
myContainer.bind<ITree>(TYPES.ITree).to(SubscribableTree)
myContainer.bind<IColorSlice>(TYPES.IColorSlice).to(ColorSlice)
myContainer.bind<IDatabaseSyncer>(TYPES.IDatabaseSyncer).to(SyncToDB)
// TODO: maybe only use this constant binding for a test container. . . Not production container
myContainer.bind<IDatedMutation<FieldMutationTypes>>(TYPES.IDatedMutation).toConstantValue({
    data: {id: '12345'},
    timestamp: Date.now(),
    type: FieldMutationTypes.SET,
})
myContainer.bind<IContentUserData>(TYPES.IContentUserData).to(ContentUserData)
myContainer.bind<IFirebaseRef>(TYPES.IFirebaseRef).to(FirebaseRef)
myContainer.bind<IMutableStringSet>(TYPES.IMutableStringSet).to(SubscribableMutableStringSet)
myContainer.bind<IProficiencyStats>(TYPES.IProficiencyStats).toConstantValue(defaultProficiencyStats)
myContainer.bind<IProppedDatedMutation<FieldMutationTypes, TreePropertyNames>>
(TYPES.IProppedDatedMutation).toConstantValue({
    data: {id: TREE_ID3},
    propertyName: TreePropertyNames.PARENT_ID,
    timestamp: Date.now(),
    type: FieldMutationTypes.SET,
})
myContainer.bind<ISigmaNode>(TYPES.ISigmaNode).to(SigmaNode)
myContainer.bind<ISigmaNodeHandler>(TYPES.ISigmaNodeHandler).to(SigmaNodeHandler)
myContainer.bind<ISubscribableContentUser>(TYPES.ISubscribableContentUser).to(SubscribableContentUser)
myContainer.bind<ISubscribableGlobalDataStore>(TYPES.ISubscribableGlobalDataStore).to(SubscribableGlobalDataStore)
myContainer.bind<ISubscribableTreeCore>(TYPES.ISubscribableTree).to(SubscribableTree)
myContainer.bind<ISubscribableMutableField<boolean>>(TYPES.ISubscribableMutableBoolean).to(SubscribableMutableField)
myContainer.bind<SubscribableMutableFieldArgs>(TYPES.SubscribableMutableFieldArgs).to(SubscribableMutableFieldArgs)
myContainer.bind<SubscribableContentUserArgs>(TYPES.SubscribableContentUserArgs).to(SubscribableContentUserArgs)
myContainer.bind<ISubscribableMutableField<number>>(TYPES.ISubscribableMutableNumber).to(SubscribableMutableField)
myContainer.bind<ISubscribableMutableField<string>>(TYPES.ISubscribableMutableString).to(SubscribableMutableField)
myContainer.bind<ISubscribableMutableField<PROFICIENCIES>>(TYPES.ISubscribableMutableProficiency)
    .to(SubscribableMutableField)
myContainer.bind<ISubscribableMutableStringSet>(TYPES.ISubscribableMutableStringSet).to(SubscribableMutableStringSet)
myContainer.bind<ISubscribableTreeDataStore>(TYPES.ISubscribableTreeDataStore).to(SubscribableTreeDataStore)
myContainer.bind<radian>(TYPES.radian).toConstantValue(0)
myContainer.bind<SigmaNodeHandlerArgs>(TYPES.SigmaNodeHandlerArgs).to(SigmaNodeHandlerArgs)
myContainer.bind<SigmaNodeHandlerSubscriber>(TYPES.SigmaNodeHandlerSubscriber).to(SigmaNodeHandlerSubscriber)
myContainer.bind<SigmaNodeHandlerSubscriberArgs>(TYPES.SigmaNodeHandlerSubscriberArgs)
    .to(SigmaNodeHandlerSubscriberArgs)
myContainer.bind<SubscribableMutableStringSetArgs>
(TYPES.SubscribableMutableStringSetArgs).to(SubscribableMutableStringSetArgs)
myContainer.bind<SubscribableArgs>(TYPES.SubscribableArgs).to(SubscribableArgs)
myContainer.bind<SubscribableTreeArgs>(TYPES.SubscribableTreeArgs).to(SubscribableTreeArgs)
/* myContainer.bind<ISubscribable<IDetailedUpdates>>
(TYPES.Subscribable_IDetailedUpdates).to(Subscribable<IDetailedUpdates>);

 */

myContainer.bind<any[]>(TYPES.Array).toConstantValue([])
// tslint:disable-next-line ban-types
myContainer.bind<Number>(TYPES.Number).toConstantValue(0)
myContainer.bind<PROFICIENCIES>(TYPES.PROFICIENCIES).toConstantValue(PROFICIENCIES.ONE)
myContainer.bind<SigmaNodeArgs>(TYPES.SigmaNodeArgs).to(SigmaNodeArgs)
// tslint:disable-next-line ban-types
myContainer.bind<String>(TYPES.String).toConstantValue('')
myContainer.bind<SyncToDBArgs>(TYPES.SyncToDBArgs).to(SyncToDBArgs)
myContainer.bind<SubscribableDataStoreArgs>(TYPES.SubscribableDataStoreArgs).to(SubscribableDataStoreArgs)
myContainer.bind<ISaveUpdatesToDBFunction>(TYPES.ISaveUpdatesToDBFunction)
    .toConstantValue((updates: IDetailedUpdates) => void 0)
myContainer.bind<UIColor>(TYPES.UIColor).toConstantValue(UIColor.GRAY);
// tslint:disable-next-line ban-types
myContainer.bind<Object>(TYPES.Object).toConstantValue({})
// myContainer.bind<IActivatableDatedMutation>(TYPES.IActivatableDatedMutationArr).to()

export {myContainer}
