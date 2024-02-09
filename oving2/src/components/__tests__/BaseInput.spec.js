import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseInputVue from '../BaseInput.vue'

describe('BaseInput', () => {
    const wrapper = mount(BaseInputVue)

    it('renders properly', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    it ('display label name', () => {
        const wrapper = mount(BaseInputVue, {
            props: {
                label: 'Name',
                error: ''
            }
        })
        expect(wrapper.find('label').text()).toBe('Name')
    })

    it ('display no error message', () => {
        const wrapper = mount(BaseInputVue, {
            props: {
                label: 'Name',
                error: ''
            }
        })
        expect(wrapper.find('p').exists()).toBe(false)
    })

    it('display error', () => {
        const wrapper = mount(BaseInputVue, {
            props: {
                label: 'Name',
                error: 'Error'
            }
        })
        expect(wrapper.find('p').text()).toBe('Error')
    })

    it('display textarea', () => {
        const wrapper = mount(BaseInputVue, {
            props: {
                label: 'Melding',
                error: 'Error'
            }
        })
        expect(wrapper.find('textarea').exists()).toBe(true)
    })

})