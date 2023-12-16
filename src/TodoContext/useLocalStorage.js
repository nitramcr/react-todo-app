import React from 'react'

function useLocalStorage(itemName, inititalValue) {
  const [item, setItem] = React.useState(inititalValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(inititalValue))
          parsedItem = inititalValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }

        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 1500)
  }, [])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }
}

export { useLocalStorage }

// const defaultTodos = [
//   { text: "Cooking dinner", completed: false },
//   { text: "Take the introductory course to React.js", completed: false },
//   { text: "Go to the gym", completed: true },
//   { text: "Start reading a book", completed: false },
//   { text: "Deploy the project on GitHub", completed: false },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");
