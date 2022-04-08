import { formatTime } from '../../components/Article/Article.js'
import { getData } from '../../pages/ArticlePage.js';
import axios from 'axios';
jest.mock('axios') // replaces axios with

// const fakeGetData = jest.fn()
// fakeGetData.mockReturnValue({data: "hello world"})

describe('the format time function', ()=>{
  describe('when passed valid input ', ()=>{
    it('should return a legible data string', ()=>{
      //can run more code here to test our application
      expect(formatTime(1649168361)).toBe('4/5/2022')
    })
  })

  describe('when passed invalid input ', ()=>{
    it('should return a legible error', ()=>{
      expect(formatTime(null)).toBe('oops! not a valid date!')
    })
  })
})

describe('fake get data', ()=>{
  it('should get some data', async ()=>{
    axios.get.mockResolvedValue('ok bye')

    const value = await getData(30919257)
    expect(value).toBe('ok bye')

  })
})