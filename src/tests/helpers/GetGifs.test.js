import { getGifs } from "../../helpers/GetGifs"


describe('Pruebas en GetGifs Fetch', () => {

    test('Debe traer 10 elementos', async() => {
       const gifs = await getGifs('One Punch');
       expect( gifs.length ).toBe(10);
    })
    
})
