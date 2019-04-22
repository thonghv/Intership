import React, { Component } from 'react';
import './Css/styles.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
            <form method="post">
              <table align="center">
                <tbody>
                <tr>
                    <th colSpan={2}>REGISTER</th>
                </tr>
                <tr>
                    <td>User Name</td>
                    <td className="rule">
                        <input type="text" id="name" placeholder="your name" />
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td className="rule">
                        <input type="text" id="pass" placeholder="your password" />
                    </td>
                </tr>
                <tr>
                    <td>Retype Password</td>
                    <td className="rule"><input type="text" id="retype" placeholder="your password" /></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td className="rule"><input id="email" placeholder="your email" /></td>
                </tr>
                <tr>
                    <td>Phone numbers</td>
                    <td className="rule"><input type="number" id="Phone" placeholder="Only numbers" /></td>
                </tr>
                <tr>
                    <td colSpan={2} align="center">
                        <input type="submit" defaultValue="Sign in"/>
                    </td>
                </tr>
                </tbody>
              </table>
            </form>
            </div>
        );
    }
}

export default App;
