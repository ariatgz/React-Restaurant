
import './App.css';
import {Fragment, useState} from "react";
import NavigationBar from "./Navigation/NavigationBar";
import Body from "./Body/Body";
import Modal from "./Modal/Modal";
import DataContext from "./Context/dataContext";


function App() {

    let foods= [
        {
            name: "Sushi",
            description: "Finest fish and veggies",
            price: 22.99,
            number:0
        },
        {
            name: "Schnitzel",
            description: "A german speciality",
            price: 16.50,
            number:0
        },
        {
            name: "Barbecue Burger",
            description: "American, raw, meaty",
            price: 12.99,
            number:0
        },
        {
            name: "Green Bowl",
            description: "Healthy...and green...",
            price: 18.99,
            number:0
        }



    ];
    let [items,setItems] = useState(foods);


    function AddItem(item,number) {


        setItems(prev => {
            let newFood = prev.map((i) => {

                if (i.name === item.name) {
                    i.number += parseInt(number);
                }
                return i;


            });

            return newFood;
        });







    }

    let [modal,setModal]=useState(false);

    function showCart(visibility) {
        setModal(true);
    }

    function closeModal() {
        setModal(false);

    }
    function Remove(name) {

        setItems(prev => {
            let newFood = prev.map((i) => {

                if (i.name === name) {
                    i.number -= 1;
                }
                return i;


            });

            return newFood;
        });


    }

    function Adder(name) {

        setItems(prev => {
            let newFood = prev.map((i) => {

                if (i.name === name) {
                    i.number += 1;
                }
                return i;


            });

            return newFood;
        });


    }

    return(
        <Fragment>
            <DataContext.Provider value={{foods: items}}>
            <NavigationBar onShowCart={showCart} />
            <Body onAdd={AddItem} />
                { modal && <Modal onAdd={Adder} onRemove={Remove} onClose={closeModal} />}
            </DataContext.Provider>


        </Fragment>
    )

}

export default App;
