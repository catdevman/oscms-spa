/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCemetery = /* GraphQL */ `
  mutation CreateCemetery(
    $input: CreateCemeteryInput!
    $condition: ModelCemeteryConditionInput
  ) {
    createCemetery(input: $input, condition: $condition) {
      id
      name
      locations {
        items {
          id
          status
          section
          plot
          marker
          level
          cemetery {
            id
            name
            locations {
              nextToken
            }
          }
          owners {
            items {
              id
            }
            nextToken
          }
          occupants {
            items {
              id
              name
              phoneNumber
              dob
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateCemetery = /* GraphQL */ `
  mutation UpdateCemetery(
    $input: UpdateCemeteryInput!
    $condition: ModelCemeteryConditionInput
  ) {
    updateCemetery(input: $input, condition: $condition) {
      id
      name
      locations {
        items {
          id
          status
          section
          plot
          marker
          level
          cemetery {
            id
            name
            locations {
              nextToken
            }
          }
          owners {
            items {
              id
            }
            nextToken
          }
          occupants {
            items {
              id
              name
              phoneNumber
              dob
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteCemetery = /* GraphQL */ `
  mutation DeleteCemetery(
    $input: DeleteCemeteryInput!
    $condition: ModelCemeteryConditionInput
  ) {
    deleteCemetery(input: $input, condition: $condition) {
      id
      name
      locations {
        items {
          id
          status
          section
          plot
          marker
          level
          cemetery {
            id
            name
            locations {
              nextToken
            }
          }
          owners {
            items {
              id
            }
            nextToken
          }
          occupants {
            items {
              id
              name
              phoneNumber
              dob
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      status
      section
      plot
      marker
      level
      cemetery {
        id
        name
        locations {
          items {
            id
            status
            section
            plot
            marker
            level
            cemetery {
              id
              name
            }
            owners {
              nextToken
            }
            occupants {
              nextToken
            }
          }
          nextToken
        }
      }
      owners {
        items {
          id
          owner {
            id
            name
            phoneNumber
            dob
            ownedLocations {
              nextToken
            }
            occupiedLocation {
              id
              status
              section
              plot
              marker
              level
            }
          }
          location {
            id
            status
            section
            plot
            marker
            level
            cemetery {
              id
              name
            }
            owners {
              nextToken
            }
            occupants {
              nextToken
            }
          }
        }
        nextToken
      }
      occupants {
        items {
          id
          name
          phoneNumber
          dob
          ownedLocations {
            items {
              id
            }
            nextToken
          }
          occupiedLocation {
            id
            status
            section
            plot
            marker
            level
            cemetery {
              id
              name
            }
            owners {
              nextToken
            }
            occupants {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      status
      section
      plot
      marker
      level
      cemetery {
        id
        name
        locations {
          items {
            id
            status
            section
            plot
            marker
            level
            cemetery {
              id
              name
            }
            owners {
              nextToken
            }
            occupants {
              nextToken
            }
          }
          nextToken
        }
      }
      owners {
        items {
          id
          owner {
            id
            name
            phoneNumber
            dob
            ownedLocations {
              nextToken
            }
            occupiedLocation {
              id
              status
              section
              plot
              marker
              level
            }
          }
          location {
            id
            status
            section
            plot
            marker
            level
            cemetery {
              id
              name
            }
            owners {
              nextToken
            }
            occupants {
              nextToken
            }
          }
        }
        nextToken
      }
      occupants {
        items {
          id
          name
          phoneNumber
          dob
          ownedLocations {
            items {
              id
            }
            nextToken
          }
          occupiedLocation {
            id
            status
            section
            plot
            marker
            level
            cemetery {
              id
              name
            }
            owners {
              nextToken
            }
            occupants {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      status
      section
      plot
      marker
      level
      cemetery {
        id
        name
        locations {
          items {
            id
            status
            section
            plot
            marker
            level
            cemetery {
              id
              name
            }
            owners {
              nextToken
            }
            occupants {
              nextToken
            }
          }
          nextToken
        }
      }
      owners {
        items {
          id
          owner {
            id
            name
            phoneNumber
            dob
            ownedLocations {
              nextToken
            }
            occupiedLocation {
              id
              status
              section
              plot
              marker
              level
            }
          }
          location {
            id
            status
            section
            plot
            marker
            level
            cemetery {
              id
              name
            }
            owners {
              nextToken
            }
            occupants {
              nextToken
            }
          }
        }
        nextToken
      }
      occupants {
        items {
          id
          name
          phoneNumber
          dob
          ownedLocations {
            items {
              id
            }
            nextToken
          }
          occupiedLocation {
            id
            status
            section
            plot
            marker
            level
            cemetery {
              id
              name
            }
            owners {
              nextToken
            }
            occupants {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      dob
      ownedLocations {
        items {
          id
          owner {
            id
            name
            phoneNumber
            dob
            ownedLocations {
              nextToken
            }
            occupiedLocation {
              id
              status
              section
              plot
              marker
              level
            }
          }
          location {
            id
            status
            section
            plot
            marker
            level
            cemetery {
              id
              name
            }
            owners {
              nextToken
            }
            occupants {
              nextToken
            }
          }
        }
        nextToken
      }
      occupiedLocation {
        id
        status
        section
        plot
        marker
        level
        cemetery {
          id
          name
          locations {
            items {
              id
              status
              section
              plot
              marker
              level
            }
            nextToken
          }
        }
        owners {
          items {
            id
            owner {
              id
              name
              phoneNumber
              dob
            }
            location {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
        occupants {
          items {
            id
            name
            phoneNumber
            dob
            ownedLocations {
              nextToken
            }
            occupiedLocation {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      dob
      ownedLocations {
        items {
          id
          owner {
            id
            name
            phoneNumber
            dob
            ownedLocations {
              nextToken
            }
            occupiedLocation {
              id
              status
              section
              plot
              marker
              level
            }
          }
          location {
            id
            status
            section
            plot
            marker
            level
            cemetery {
              id
              name
            }
            owners {
              nextToken
            }
            occupants {
              nextToken
            }
          }
        }
        nextToken
      }
      occupiedLocation {
        id
        status
        section
        plot
        marker
        level
        cemetery {
          id
          name
          locations {
            items {
              id
              status
              section
              plot
              marker
              level
            }
            nextToken
          }
        }
        owners {
          items {
            id
            owner {
              id
              name
              phoneNumber
              dob
            }
            location {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
        occupants {
          items {
            id
            name
            phoneNumber
            dob
            ownedLocations {
              nextToken
            }
            occupiedLocation {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      dob
      ownedLocations {
        items {
          id
          owner {
            id
            name
            phoneNumber
            dob
            ownedLocations {
              nextToken
            }
            occupiedLocation {
              id
              status
              section
              plot
              marker
              level
            }
          }
          location {
            id
            status
            section
            plot
            marker
            level
            cemetery {
              id
              name
            }
            owners {
              nextToken
            }
            occupants {
              nextToken
            }
          }
        }
        nextToken
      }
      occupiedLocation {
        id
        status
        section
        plot
        marker
        level
        cemetery {
          id
          name
          locations {
            items {
              id
              status
              section
              plot
              marker
              level
            }
            nextToken
          }
        }
        owners {
          items {
            id
            owner {
              id
              name
              phoneNumber
              dob
            }
            location {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
        occupants {
          items {
            id
            name
            phoneNumber
            dob
            ownedLocations {
              nextToken
            }
            occupiedLocation {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const createLocationOwners = /* GraphQL */ `
  mutation CreateLocationOwners(
    $input: CreateLocationOwnersInput!
    $condition: ModelLocationOwnersConditionInput
  ) {
    createLocationOwners(input: $input, condition: $condition) {
      id
      owner {
        id
        name
        phoneNumber
        dob
        ownedLocations {
          items {
            id
            owner {
              id
              name
              phoneNumber
              dob
            }
            location {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
        occupiedLocation {
          id
          status
          section
          plot
          marker
          level
          cemetery {
            id
            name
            locations {
              nextToken
            }
          }
          owners {
            items {
              id
            }
            nextToken
          }
          occupants {
            items {
              id
              name
              phoneNumber
              dob
            }
            nextToken
          }
        }
      }
      location {
        id
        status
        section
        plot
        marker
        level
        cemetery {
          id
          name
          locations {
            items {
              id
              status
              section
              plot
              marker
              level
            }
            nextToken
          }
        }
        owners {
          items {
            id
            owner {
              id
              name
              phoneNumber
              dob
            }
            location {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
        occupants {
          items {
            id
            name
            phoneNumber
            dob
            ownedLocations {
              nextToken
            }
            occupiedLocation {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const updateLocationOwners = /* GraphQL */ `
  mutation UpdateLocationOwners(
    $input: UpdateLocationOwnersInput!
    $condition: ModelLocationOwnersConditionInput
  ) {
    updateLocationOwners(input: $input, condition: $condition) {
      id
      owner {
        id
        name
        phoneNumber
        dob
        ownedLocations {
          items {
            id
            owner {
              id
              name
              phoneNumber
              dob
            }
            location {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
        occupiedLocation {
          id
          status
          section
          plot
          marker
          level
          cemetery {
            id
            name
            locations {
              nextToken
            }
          }
          owners {
            items {
              id
            }
            nextToken
          }
          occupants {
            items {
              id
              name
              phoneNumber
              dob
            }
            nextToken
          }
        }
      }
      location {
        id
        status
        section
        plot
        marker
        level
        cemetery {
          id
          name
          locations {
            items {
              id
              status
              section
              plot
              marker
              level
            }
            nextToken
          }
        }
        owners {
          items {
            id
            owner {
              id
              name
              phoneNumber
              dob
            }
            location {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
        occupants {
          items {
            id
            name
            phoneNumber
            dob
            ownedLocations {
              nextToken
            }
            occupiedLocation {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteLocationOwners = /* GraphQL */ `
  mutation DeleteLocationOwners(
    $input: DeleteLocationOwnersInput!
    $condition: ModelLocationOwnersConditionInput
  ) {
    deleteLocationOwners(input: $input, condition: $condition) {
      id
      owner {
        id
        name
        phoneNumber
        dob
        ownedLocations {
          items {
            id
            owner {
              id
              name
              phoneNumber
              dob
            }
            location {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
        occupiedLocation {
          id
          status
          section
          plot
          marker
          level
          cemetery {
            id
            name
            locations {
              nextToken
            }
          }
          owners {
            items {
              id
            }
            nextToken
          }
          occupants {
            items {
              id
              name
              phoneNumber
              dob
            }
            nextToken
          }
        }
      }
      location {
        id
        status
        section
        plot
        marker
        level
        cemetery {
          id
          name
          locations {
            items {
              id
              status
              section
              plot
              marker
              level
            }
            nextToken
          }
        }
        owners {
          items {
            id
            owner {
              id
              name
              phoneNumber
              dob
            }
            location {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
        occupants {
          items {
            id
            name
            phoneNumber
            dob
            ownedLocations {
              nextToken
            }
            occupiedLocation {
              id
              status
              section
              plot
              marker
              level
            }
          }
          nextToken
        }
      }
    }
  }
`;
