import { createStore , combineReducers} from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
  }
})


// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_DATE
// SET_START_DATE
// SET_END_DATE

// Expenses reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}

// Filters reducer 
// text: '' sortBy => 'date, startDate,endDate => undefined
const filtersReducerDefaultSate = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultSate, action) => {
  switch (action.type) {
    default:
      return state
  }
}

//Store creation 

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
    
  })
)

store.subscribe(() => {
console.log(store.getState())
})

const expenseOne = store.dispatch((addExpense({description : 'Rent', amount: 100})))
const expensetwo = store.dispatch((addExpense({description : 'Coffee', amount: 300})))

store.dispatch(removeExpense({ id: expenseOne.expense.id }))

console.log(expenseOne)

const demoState = {
  expenses: [{
    id: 'sdfasf',
    description: 'January rent',
    note:'this was the final payment',
    amount: 545000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}