import React from 'react'
import Section1 from './components/section1/section1.jsx'

const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1781045230615-9c53b6f8f05a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      tage: 'satisfied',
      num:'1'
    },
    {
      img: 'https://imgs.search.brave.com/h82mr0Y3ReKZe0nPXuYVM4Tgk_XZ8qEWSB1-irps9SQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/MjQyLzMzMC9zbWFs/bC95b3VuZy13b21h/bi13b3JraW5nLW9u/LWEtY29tcHV0ZXIt/cGhvdG8uanBn',
      intro: '',
      tage: 'under served',
      num:'2'
    },
    {
      img: 'https://imgs.search.brave.com/MmYlNuVzeihoiXY9HW45Mt78ChToBDT9sPQGW93o6GE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjIx/OTYzNTM4NS9waG90/by9zbWlsaW5nLXBy/b2Zlc3Npb25hbC1z/ZWF0ZWQtYXQtYS1k/ZXNrLXdpdGgtYS1s/YXB0b3AtaW4tYW4t/b2ZmaWNlLndlYnA_/YT0xJmI9MSZzPTYx/Mng2MTImdz0wJms9/MjAmYz1xZ202NGZ1/eVFiUU1rdHVxT09y/dmoyVEtaUU1kRWwy/V2ZXbVRzSnJ5dE80/PQ',
      intro: '',
      tage: 'under banked',
      num:3
    }
  ]

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App