import {injectFakeDom} from '../../testHelpers/injectFakeDom';
injectFakeDom()
import test from 'ava'
import {expect} from 'chai'
import 'reflect-metadata'
import * as sinon from 'sinon'
import {myContainer, myContainerLoadAllModules} from '../../../inversify.config';
import {MutableSubscribableField} from '../field/MutableSubscribableField';
import {
    IContentUserData,
    ISubscribableContentUser,
    ISubscribableMutableField,
    ISubscribableMutableStringSet,
} from '../interfaces';
import {PROFICIENCIES} from '../proficiency/proficiencyEnum';
import {TYPES} from '../types';
import {SubscribableContentUser} from './SubscribableContentUser';

myContainerLoadAllModules()
test('SubscribableContentUser:::constructor should set all the subscribable properties', (t) => {
    const contentUserId = 'abcde12345_defgh1234567'
    const overdue = new MutableSubscribableField<boolean>({field: false})
    const lastRecordedStrength = new MutableSubscribableField<number>({field: 45})
    const proficiency = new MutableSubscribableField<PROFICIENCIES>({field: PROFICIENCIES.TWO})
    const timer = new MutableSubscribableField<number>({field: 30})
    const contentUser: ISubscribableContentUser = new SubscribableContentUser({
        id: contentUserId, lastRecordedStrength, overdue, proficiency, timer, updatesCallbacks: [],
    })
    expect(contentUser.overdue).to.deep.equal(overdue)
    expect(contentUser.timer).to.deep.equal(timer)
    expect(contentUser.proficiency).to.deep.equal(proficiency)
    expect(contentUser.lastRecordedStrength).to.deep.equal(lastRecordedStrength)
    t.pass()
})
test('SubscribableContentUser:::.val() should display the value of the object', (t) => {
    const contentUserId = 'abcde12345_defgh1234567'
    const lastRecordedStrength = new MutableSubscribableField<number>({field: 45})
    const overdue = new MutableSubscribableField<boolean>({field: false})
    const proficiency = new MutableSubscribableField<PROFICIENCIES>({field: PROFICIENCIES.TWO})
    const timer = new MutableSubscribableField<number>({field: 30})
    const contentUser = new SubscribableContentUser({
        id: contentUserId, lastRecordedStrength, overdue, proficiency, timer, updatesCallbacks: [],
    })

    const expectedVal: IContentUserData = {
        id: contentUserId,
        lastRecordedStrength: lastRecordedStrength.val(),
        overdue: overdue.val(),
        proficiency: proficiency.val(),
        timer: timer.val(),
    }

    expect(contentUser.val()).to.deep.equal(expectedVal)
    t.pass()
})
test('SubscribableContentUser:::startPublishing() should call the onUpdate methods' +
    ' of all member Subscribable properties', (t) => {
    const contentUserId = 'abcde12345_defgh1234567'
    const lastRecordedStrength = new MutableSubscribableField<number>({field: 45})
    const overdue = new MutableSubscribableField<boolean>({field: false})
    const proficiency = new MutableSubscribableField<PROFICIENCIES>({field: PROFICIENCIES.TWO})
    const timer = new MutableSubscribableField<number>({field: 30})
    const contentUser = new SubscribableContentUser({
        id: contentUserId, lastRecordedStrength, overdue, proficiency, timer, updatesCallbacks: [],
    })

    const lastRecordedStrengthOnUpdateSpy = sinon.spy(lastRecordedStrength, 'onUpdate')
    const overdueOnUpdateSpy = sinon.spy(overdue, 'onUpdate')
    const proficiencyOnUpdateSpy = sinon.spy(proficiency, 'onUpdate')
    const timerOnUpdateSpy = sinon.spy(timer, 'onUpdate')

    contentUser.startPublishing()
    expect(overdueOnUpdateSpy.callCount).to.deep.equal(1)
    expect(lastRecordedStrengthOnUpdateSpy.callCount).to.deep.equal(1)
    expect(timerOnUpdateSpy.callCount).to.deep.equal(1)
    expect(proficiencyOnUpdateSpy.callCount).to.deep.equal(1)
    t.pass()
})
