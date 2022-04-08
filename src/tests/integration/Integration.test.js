import { getData } from "../../pages/ArticlePage";

describe('fake get data', ()=>{
  it('should get some data', async ()=>{
    
    const value = await getData(30919257)
    console.log('value? '), value.data.id
    expect(value.data.id).toBe(30919257)
    expect(value.data.by).toBe('robbiejs')
  })
})