import React from 'react'
import Card1 from './components/card1'
const App = () => {
  return (
    <div className='Card-container'>

      <Card1
        img="https://static.vecteezy.com/system/resources/previews/014/018/561/original/amazon-logo-on-transparent-background-free-vector.jpg"
        company="Amazon"
        role="Senior UI/UX Designer"
        type="Part-time"
        level="Senior-Level"
        price="$120/hr"
      />

      <Card1
        img="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        company="Google"
        role="Frontend Developer"
        type="Full-time"
        level="Mid-Level"
        price="$150/hr"
      />

      <Card1
        img="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        company="Netflix"
        role="Motion Designer"
        type="Contract"
        level="Senior-Level"
        price="$180/hr"
      />
      <Card1
      img="https://static.vecteezy.com/system/resources/previews/012/660/867/original/dribbble-logo-on-transparent-isolated-background-free-vector.jpg"
      company="Dribble"
      role="Senior Motion Designer"
      type="Contract"
      level="Remote"
      price="$85/hr"
      />
      <Card1
      img="https://logos-world.net/wp-content/uploads/2021/11/Meta-Emblem.png"
      company="Meta"
      role="UX Designer"
      type="Full-time"
      level="in-Office"
      price="$200-250k"
      />
      <Card1
      img="https://assets.entrepreneur.com/content/3x2/2000/1405612741-airbnb-why-new-logo.jpg"
      company="Airbnb"
      role="Junior UX/UI Designer"
      type="Contract"
      level="Remote"
      price="$100/hr"
      />
      <Card1
      img="https://tse2.mm.bing.net/th/id/OIP.GzDl4lbn0PYYeSNiCFVRvgHaFj?pid=Api&P=0&h=180"
      company="Apple"
      role="Graphic Designer"
      type="Full-time"
      level="Flexible schdeule"
      price="$85k -120k"
      />


    </div>
  )
}

export default App
