import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Calculator from '../../views/Calculator.vue'

describe('Calculator', () => {
  const wrapper = mount(Calculator)
  
  it('renders properly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('add number to screen', async () => {
    await wrapper.find('#button1').trigger('click');
    expect(wrapper.find('#content').text()).toEqual('1');

  })

  it('add numbers correct', async () => {
    await wrapper.find('#buttonClear').trigger('click');
    await wrapper.find('#button1').trigger('click');
    await wrapper.find('#buttonPlus').trigger('click');
    await wrapper.find('#button1').trigger('click');
    await wrapper.find('#buttonEquals').trigger('click');
    expect(wrapper.find('#content').text()).toEqual('2');
  })

  it('subtract numbers correct', async () => {
    await wrapper.find('#buttonClear').trigger('click');
    await wrapper.find('#button1').trigger('click');
    await wrapper.find('#buttonMinus').trigger('click');
    await wrapper.find('#button1').trigger('click');
    await wrapper.find('#buttonEquals').trigger('click');
    expect(wrapper.find('#content').text()).toEqual('0');
  })

  it('Multiplicate numbers correct', async () => {
    await wrapper.find('#buttonClear').trigger('click');
    await wrapper.find('#button9').trigger('click');
    await wrapper.find('#buttonMultiplicate').trigger('click');
    await wrapper.find('#button9').trigger('click');
    await wrapper.find('#buttonEquals').trigger('click');
    expect(wrapper.find('#content').text()).toEqual('81');
  })

  it('Divide numbers correct', async () => {
    await wrapper.find('#buttonClear').trigger('click');
    await wrapper.find('#button2').trigger('click');
    await wrapper.find('#button7').trigger('click');
    await wrapper.find('#buttonDivide').trigger('click');
    await wrapper.find('#button9').trigger('click');
    await wrapper.find('#buttonEquals').trigger('click');
    expect(wrapper.find('#content').text()).toEqual('3');
  })

  it('Divide by zero error', async () => {
    await wrapper.find('#buttonClear').trigger('click');
    await wrapper.find('#button6').trigger('click');
    await wrapper.find('#button9').trigger('click');
    await wrapper.find('#buttonDivide').trigger('click');
    await wrapper.find('#button0').trigger('click');
    await wrapper.find('#buttonEquals').trigger('click');
    expect(wrapper.find('#content').text()).toEqual('Error');
  })

  it('Delete symbol', async () => {
    await wrapper.find('#buttonClear').trigger('click');
    await wrapper.find('#button6').trigger('click');
    await wrapper.find('#button9').trigger('click');
    await wrapper.find('#buttonDEL').trigger('click');
    await wrapper.find('#buttonEquals').trigger('click');
    expect(wrapper.find('#content').text()).toEqual('6');
  })

  it('Get previous answer', async () => {
    await wrapper.find('#buttonClear').trigger('click');
    await wrapper.find('#button4').trigger('click');
    await wrapper.find('#buttonPlus').trigger('click');
    await wrapper.find('#buttonANS').trigger('click');
    await wrapper.find('#buttonEquals').trigger('click');
    expect(wrapper.find('#content').text()).toEqual('10');
  })

})