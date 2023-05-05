import React from 'react';

import Card from '../UI/Card/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Fried Chicken Sandwich',
    description: 'Southern Fried Chicken, Bacon, Cheddar, Chipotle Aioli',
    price: 12.99,
  },
  {
    id: 'm2',
    name: 'Salmon BLT',
    description: 'Pan Seared Salmon, Crispy Bacon, Saffron-Mustard Aioli',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Squash Sandwich',
    description:
      'Roasted Squash, Fresh Mozzarella, Roasted Garlic Puree, Rosemary Balsamic Glaze',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Black Angus Burger',
    description:
      'House Burger Blend, Butter Toasted Brioche, Cheese or Caramelized Onion, Bacon or Wild Mushrooms',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Stone House Burger',
    description:
      'House Burger Blend, Caramelized Onion, Fresh Mozzarella, Tomato Jam, Basil, Rosemary Balsamic Glaze ',
    price: 13.5,
  },
  {
    id: 'm6',
    name: 'Lobster Roll',
    description:
      'Butter Toasted Split top Bun, Maine Lobster, Lemon Zest, Shallot-Tarragon Aioli',
    price: 15.0,
  },
  {
    id: 'm7',
    name: 'Herb Crusted Redfish',
    description: 'Lemon Beurre Blanc, Forbidden Rice, Garlic String Beans',
    price: 20.99,
  },
  {
    id: 'm8',
    name: 'Crab Cake Sandwich',
    description:
      'Ritz-Pretzel Crust, Grilled Pear & Fennel Slaw, Pickled Red Onion Aioli',
    price: 25.99,
  },
  {
    id: 'm9',
    name: 'Filet Mignon Sandwich',
    description:
      'Swiss Cheese, French Onion Jam, Roasted Garlic & Horseradish Cream',
    price: 15.99,
  },
  {
    id: 'm10',
    name: 'Shrimp & Zucchini Scampi',
    description:
      'Squid Ink Linguini, Sauteed Shrimp & Zucchini, Roasted & Fresh Garlic, Lemon Beurre Blanc, Chilli Flake, Toasted Bread Crumbs',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
