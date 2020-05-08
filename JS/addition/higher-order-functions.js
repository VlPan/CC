// NOTE: The filter functions are now individual functions (not wrapped with filterFrogs)
const frogsList = [
    // Yes, these frogs are intelligent. They know how to use email
    {
      name: 'bobTheFrog',
      email: 'froggy@gmail.com',
      age: 2,
      gender: 'Male',
      widthOfTongue: 3,
    },
    {
      name: 'hippoTheFrog',
      email: 'hippo@gmail.com',
      age: 10,
      gender: 'Male',
      widthOfTongue: 11,
    },
    {
      name: 'sally',
      email: 'sallyLipstick@gmail.com',
      age: 5,
      gender: 'Female',
      widthOfTongue: 4,
    },
    {
      name: 'george',
      email: 'georgeRoseBowl@gmail.com',
      age: 11,
      gender: 'Male',
      widthOfTongue: 3,
    },
    {
      name: 'lisa',
      email: 'lisaLovesGeorgeForever@gmail.com',
      age: 19,
      gender: 'Female',
      widthOfTongue: 15,
    },
    {
      name: 'kentucky',
      email: 'frogInKentucky@yahoo.com',
      age: 18,
      gender: 'Male',
      widthOfTongue: 13,
    },
  ]
  
  const frogsList2 = [
    {
      name: 'abc',
      email: 'froggy@gmail.com',
      age: 2,
      gender: 'Male',
      widthOfTongue: 1,
    },
    {
      name: '123',
      email: 'hippo@gmail.com',
      age: 10,
      gender: 'Male',
      widthOfTongue: 4,
    },
    {
      name: 'joe',
      email: 'sallyLipstick@aol.com',
      age: 5,
      gender: 'Female',
      widthOfTongue: 6,
    },
    {
      name: 'jennifer',
      email: 'georgeRoseBowl@aol.com',
      age: 11,
      gender: 'Female',
      widthOfTongue: 10,
    },
  ]
  
  const frogsList3 = [
    {
      name: 'professorHammick',
      email: 'froggy@gmail.com',
      age: 2,
      gender: 'Female',
      widthOfTongue: 1,
    },
    {
      name: 'macintosh',
      email: 'hippo@gmail.com',
      age: 10,
      gender: 'Female',
      widthOfTongue: 6,
    },
    {
      name: 'frogger',
      email: 'sallyLipstick@gmail.com',
      age: 5,
      gender: 'Female',
      widthOfTongue: 4,
    },
    {
      name: 'frogNation',
      email: 'georgeRoseBowl@gmail.com',
      age: 11,
      gender: 'Female',
      widthOfTongue: 4,
    },
  ]

const filterMaleFrogs = function(frog) {
    return frog.gender === 'Male'
  }
  const filterAdultFrogs = function(frog) {
    return frog.age >= 10
  }
  const filterFrogNamesThatStartWithHippo = function(frog) {
    return frog.name.toLowerCase().startsWith('hippo')
  }
  const filterGmailEmails = function(frog) {
    return /gmail.com/i.test(frog.email)
  }

  function combineFilters(...fns) {
    return function(val) {
      for (let i = 0; i < fns.length; i++) {
        const filter = fns[i]
        const passes = filter(val)
        if (passes) {
          continue
        } else {
          return false
        }
      }
      return true
    }
  }

  function composeFrogFilterers(...fns) {
    return function(frogs) {
      return frogs.filter(combineFilters(...fns))
    }
  }
  const applyFrogFilterers = composeFrogFilterers(
    filterMaleFrogs,
    filterAdultFrogs,
    filterFrogNamesThatStartWithHippo,
    filterGmailEmails,
  )
  let combinedFrogsList = [...frogsList, ...frogsList2, ...frogsList3]
  const allFilteredFrogs = applyFrogFilterers(combinedFrogsList)


  let filters = [
    filterMaleFrogs,
    filterAdultFrogs,
    filterFrogNamesThatStartWithHippo,
    filterGmailEmails,
  ]


  for( let filter of filters ) {
    combinedFrogsList = combinedFrogsList.filter(filter);
  }

  console.log(combinedFrogsList);
  /*
        result:
          {
            age: 10,
            email: "hippo@gmail.com",
            gender: "Male",
            name: "hippoTheFrog",
            widthOfTongue: 11
          }
  */

