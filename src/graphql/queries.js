/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCemetery = /* GraphQL */ `
  query GetCemetery($id: ID!) {
    getCemetery(id: $id) {
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
export const listCemeterys = /* GraphQL */ `
  query ListCemeterys(
    $filter: ModelCemeteryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCemeterys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLocationOwners = /* GraphQL */ `
  query GetLocationOwners($id: ID!) {
    getLocationOwners(id: $id) {
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
export const listLocationOwnerss = /* GraphQL */ `
  query ListLocationOwnerss(
    $filter: ModelLocationOwnersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocationOwnerss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner {
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
      nextToken
    }
  }
`;
