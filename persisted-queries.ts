export const store = {
  "934599297b05b089651db842d8e295ebea893a17394fdc558b5c381d7053e911": /* GraphQL */ `
    query GetCart {
      cart(id: "wtf") {
        id
        totalItems
        subTotal {
          formatted
        }
      }
    }
  `,
  "6db42a375acfa9852c200c89f79d432a75af9073e43e264c488b2bd52f28fcf7": /* GraphQL */ `
    query GetCartById($id: ID!) {
      cart(id: $id) {
        id
        totalItems
        subTotal {
          formatted
        }
      }
    }
  `,
};
