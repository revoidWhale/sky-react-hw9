import { Component } from 'react'

class UserInfo extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <main>
        <form>
          <input placeholder="First Name" />
          <br />
          <input placeholder="Last Name" />
          <br />
          <input placeholder="Age" />
          <br />

          {/* Здесь создайте переключатели для выбора пола */}
          <br />

          {/* Здесь создайте поле со списком для выбора места жительства */}
          <br />

          {/* Здесь создайте выпадшку с кодами стран и инпут 
																												для номера телефона */}
          <br />

           {/* Здесь создайте флажки для указания вероисповедания */}
           <br />

          <button type="submit">Submit</button>
        </form>
        <hr />
        <h2>
          <font color="#3AC1EF">Entered information:</font>
        </h2>
        <p>Your name: {/* Имя и фамилия */}</p>
        <p>Your age: {/* Возраст */}</p>
        <p>Your gender: {/* Пол */}</p>
        <p>Your destination: {/*  Место жительства */}</p>
        <p>Your phone number: {/*  Место жительства */}</p>
        <p>
          Your religion:
          {/* Список вероисповеданий: христианство, индуизм,
																								 буддизм, ислам, иудаимз */}
        </p>
      </main>
    )
  }
}

export default UserInfo
