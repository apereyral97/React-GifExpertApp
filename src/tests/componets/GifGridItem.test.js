import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../componentes/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un título';
    const url   = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    
    test('debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('debe tener la imagen al igual que los props', () => {
        const img = wrapper.find('img');
        expect( img.props().src ).toBe( url );
        expect( img.props().alt ).toBe( title );
    })
    test('debe de tener el animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).toBe( true );
    })
    
})
