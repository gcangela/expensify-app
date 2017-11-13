import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import Header from '../components/Header'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
// Create six new files for the six components 
//Use same naming convention 
//Setup imports 
//default export
// import into approuter

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage} />
    <Route path="/edit" component={EditExpensePage} />
    <Route path="/help" component={HelpPage} />
    <Route component={NotFoundPage} />
  </Switch> 
  </div>
  
</BrowserRouter>
)

export default AppRouter