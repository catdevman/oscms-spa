/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCemetery = /* GraphQL */ `
  subscription OnCreateCemetery {
    onCreateCemetery {
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
export const onUpdateCemetery = /* GraphQL */ `
  subscription OnUpdateCemetery {
    onUpdateCemetery {
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
export const onDeleteCemetery = /* GraphQL */ `
  subscription OnDeleteCemetery {
    onDeleteCemetery {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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
export const onCreateLocationOwners = /* GraphQL */ `
  subscription OnCreateLocationOwners {
    onCreateLocationOwners {
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
export const onUpdateLocationOwners = /* GraphQL */ `
  subscription OnUpdateLocationOwners {
    onUpdateLocationOwners {
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
export const onDeleteLocationOwners = /* GraphQL */ `
  subscription OnDeleteLocationOwners {
    onDeleteLocationOwners {
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
