import { graphql } from "../gql";

const GetCartByIdDocument = graphql(/* GraphQL */ `
  query GetCartById($id: ID!) {
    cart(id: $id) {
      id
      totalItems
      totalUniqueItems
      items {
        id
        quantity
        name
        unitTotal {
          formatted
        }
      }
    }
  }
`);

const AddItemToCartDocument = graphql(/* GraphQL */ `
  mutation AddItemToCart($cartId: ID!, $id: ID!, $name: String!, $price: Int!) {
    addItem(input: { cartId: $cartId, id: $id, name: $name, price: $price }) {
      id
      subTotal {
        amount
        formatted
      }
    }
  }
`);
