import React from 'react'
import { shallow } from 'enzyme';
import AddCategory from '../../componentes/AddCategory';

describe('Pruebas componente AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategory={ setCategories } /> )
    })
    
    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    test('debe cambiar la entrada del texto', () => {
        const input = wrapper.find('input');
        const value = 'Goku';
        input.simulate('change', { target:{ value } })
    })
    test('NO debe postear la informacion submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
        
    })
    // test('debe llamar al setCategories y limpiar la caja del texto', () => {
    //     const value = 'Hola Mundo';
    //     wrapper.find('input').simulate('change', { target: { value } });
    //     wrapper.find('form').simulate('submit', { preventDefault(){} });
    //     expect( setCategories ).toHaveBeenCalled();
    //     expect( wrapper.find('input').prop('value') ).toBe('');
    // })
    
    
    
})
