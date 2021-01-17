import { gql } from "@apollo/client";

export const ALL_RECIPES = gql`
  query RecipeCard {
    recipes {
      id
      title
      catagory
      cuisine
      badges
      time
      thumbnail {
        url
        alt
      }
    }
  }
`;

export const RECIPE_BY_ID = gql`
  query Recipe($id: ID!) {
    recipe(id: $id) {
      id
      title
      description
      catagory
      cuisine
      badges
      time
      creator {
        name
        url
      }
      serving {
        quantity
        type
      }
      thumbnail {
        url
        alt
      }
      notes
      ingredients {
        name
        ingredients {
          name
          quantity
          unit
          plural
        }
      }
      method
    }
  }
`;
