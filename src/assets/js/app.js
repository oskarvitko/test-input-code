const onDomLoaded = () => {
    const input = document.querySelector('#input')
    const btn = document.querySelector('#btn')

    btn.addEventListener('click', event => {
        event.preventDefault()
        submitHandler(input)
    })
}

const submitHandler = input => {
    if (!input.value) {
        return alert('Ошибка! Поле с номером не должно быть пустым!')
    }

    fetchOrder(input.value)
}

const fetchOrder = async number => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'POST',
            body: JSON.stringify({
                title: number,
                userId: 1
              }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })

        const json = await response.json()
        alert(`Заказ на номер "${number}" добавлен. Номер заказа: ${json.id}`)
    } catch (e) {
        console.log(e.message)
    }
}

document.addEventListener('DOMContentLoaded', onDomLoaded)