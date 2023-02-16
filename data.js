const dogs = [
    {
      name: "Milton",
      breed: "American Bulldog cross",
      spayNeuter: "Spayed / Neutered",
      sex: "Male",
      age: "3Yrs 4Mths 4Wks (approx)",
      animalId: 25532,
      vaccinationStatus: "vaccinated",
      location: "Kenton county",
      availableForAdoption: true,
      type: "dog",
      additionalDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante tellus, sagittis at urna sit amet, faucibus faucibus lacus. Suspendisse rutrum nisl in augue convallis sollicitudin. Quisque nulla risus, ultrices vitae sollicitudin quis, pellentesque a ligula.",
      photos: [
        "https://random.dog/093a41da-e2c0-4535-a366-9ef3f2013f73.jpg",
        "https://random.dog/0d8454ea-346c-43a7-9611-a15d25a7bd67.jpg",
        "https://random.dog/1326984c-39b0-492c-a773-f120d747a7e2.jpg",
      ],
    },
    {
      name: "Gypsy",
      breed: "American Bulldog cross",
      spayNeuter: "Spayed / Neutered",
      sex: "Female",
      age: "2Yrs 2Mths 4Wks (approx)",
      animalId: 26002,
      vaccinationStatus: "vaccinated",
      location: "Kenton county",
      availableForAdoption: true,
      type: "dog",
      additionalDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante tellus, sagittis at urna sit amet, faucibus faucibus lacus. Suspendisse rutrum nisl in augue convallis sollicitudin. Quisque nulla risus, ultrices vitae sollicitudin quis, pellentesque a ligula.",
      photos: [
        "https://random.dog/1e10906f-aead-49fb-9b39-ad8540847e24.jpg",
        "https://random.dog/1e482684-d3a4-4574-b64c-06e8b407ed71.jpeg",
        "https://random.dog/1e8d7674-2889-498a-828d-161fd7ff372a.jpg",
      ],
    },
    {
        "name": "Castiel",
        "breed": "American Pit Bull cross",
        "sex": "Male",
        "age": "1Yrs 5Mths 2Wks (approx)",
        "animalID": 25275,
        "vaccinationStatus": "vaccinated",
        "location": "Kenton county",
        "availableForAdoption": true,
        "type": "dog",
        "additionalDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante tellus, sagittis at urna sit amet, faucibus faucibus lacus. Suspendisse rutrum nisl in augue convallis sollicitudin. Quisque nulla risus, ultrices vitae sollicitudin quis, pellentesque a ligula.",
        "photos": [
          "https://random.dog/1f3fcc44-3b7c-4268-92a9-a6faa6f75547.jpg",
          "https://random.dog/201915e6-89e5-4811-8648-7c433d771af5.jpg",
          "https://random.dog/2032518a-eec8-4102-9d48-3dca5a26eb23.png"
        ]
      },
      {
        "name": "Surge",
        "breed": "American Pit Bull cross",
        "sex": "Male",
        "age": "1Yrs 8Mths 3Wks",
        "animalID": 25663,
        "vaccinationStatus": "vaccinated",
        "location": "Kenton county",
        "availableForAdoption": true,
        "type": "dog",
        "additionalDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante tellus, sagittis at urna sit amet, faucibus faucibus lacus. Suspendisse rutrum nisl in augue convallis sollicitudin. Quisque nulla risus, ultrices vitae sollicitudin quis, pellentesque a ligula.",
        "photos": [
          "https://random.dog/29442e1e-4078-4d74-b06c-f0b4c054c8f0.png",
          "https://random.dog/2968fed6-c79f-4c92-8455-305f4cf60d22.jpg",
          "https://random.dog/29abc3bf-4291-49e7-b2df-efe128f98696.jpg"
        ]
      },
      {
        "name": "Maroon",
        "breed": "American Pit Bull cross",
        "neutered": true,
        "gender": "Male",
        "age": "2Yrs 1Mths 1Wks (approx)",
        "animalID": 26327,
        "vaccinationStatus": "vaccinated",
        "location": "Kenton county",
        "availableForAdoption": true,
        "type": "dog",
        "additionalDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante tellus, sagittis at urna sit amet, faucibus faucibus lacus. Suspendisse rutrum nisl in augue convallis sollicitudin. Quisque nulla risus, ultrices vitae sollicitudin quis, pellentesque a ligula.",
        "images": [
          "https://random.dog/362b09bf-4a21-4003-ae81-cc6499ecef11.png",
          "https://random.dog/368b65b4-e6ce-4d33-9b6b-b444c8620e1a.jpg",
          "https://random.dog/36c5a723-e264-42c1-af94-a7188cf4dda4.jpg"
        ]
      },
      {
        "name": "Winter Warlock",
        "breed": "American Pit Bull cross",
        "neutered": true,
        "gender": "Male",
        "age": "2Yrs 3Wks (approx)",
        "animalID": 26443,
        "vaccinationStatus": "vaccinated",
        "location": "Kenton county",
        "availableForAdoption": true,
        "type": "dog",
        "additionalDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante tellus, sagittis at urna sit amet, faucibus faucibus lacus. Suspendisse rutrum nisl in augue convallis sollicitudin. Quisque nulla risus, ultrices vitae sollicitudin quis, pellentesque a ligula.",
        "images": [
          "https://random.dog/3a085a78-900e-4206-a864-74c31d4d696b.jpg",
          "https://random.dog/3a772b3f-3333-4b34-bbb5-e567770d6c31.jpg",
          "https://random.dog/3a7ba33f-9818-4970-a713-db29fe43baa8.jpg"
        ]
      },
      {
        "name": "Rudy",
        breed: 'American Pit Bull mixed Terrier',
        spayedNeutered: 'Spayed / Neutered',
        gender: 'Male',
        age: '3Yrs 10Mths 4Wks',
        animalID: 26496,
        vaccinationStatus: 'vaccinated',
        location: 'Kenton county',
        availableForAdoption: true,
        type: 'dog',
        additionalDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante tellus, sagittis at urna sit amet, faucibus faucibus lacus. Suspendisse rutrum nisl in augue convallis sollicitudin. Quisque nulla risus, ultrices vitae sollicitudin quis, pellentesque a ligula.',
        images: [
          'https://random.dog/47bab7ec-84da-4def-801e-1c3d82c9ac66.jpg',
          'https://random.dog/47e0db30-c4a4-4719-97c4-54ed5893934f.JPG',
          'https://random.dog/486cc9cd-f850-4639-983d-fe7531879573.gif'
        ]
      },
      {
        "name": "Harry",
        breed: 'American Pit Bull cross',
        spayedNeutered: 'Spayed / Neutered',
        gender: 'Male',
        age: '3Yrs 1Wks (approx)',
        animalID: 26543,
        vaccinationStatus: 'vaccinated',
        location: 'Kenton county',
        availableForAdoption: true,
        type: 'dog',
        additionalDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante tellus, sagittis at urna sit amet, faucibus faucibus lacus. Suspendisse rutrum nisl in augue convallis sollicitudin. Quisque nulla risus, ultrices vitae sollicitudin quis, pellentesque a ligula.',
        images: [
          'https://random.dog/4b9e2ba4-cab4-407d-b16d-d124d124a8fa.gif',
          'https://random.dog/4bd3f722-8acc-4eb3-9572-7b516edebc93.jpg',
          'https://random.dog/4c1b848d-7aac-4a54-a4c1-de5fe52abfeb.jpg'
        ]
      },
      {
        "name": "Carrie",
        "breed": "Beagle mixed Terrier",
        "gender": "Female",
        "age": "10Yrs 2Mths 1Wks (approx)",
        "animalID": 26178,
        "vaccinationStatus": "vaccinated",
        "location": "Kenton county",
        "availableForAdoption": true,
        "type": "dog",
        "additionalDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante tellus, sagittis at urna sit amet, faucibus faucibus lacus. Suspendisse rutrum nisl in augue convallis sollicitudin. Quisque nulla risus, ultrices vitae sollicitudin quis, pellentesque a ligula.",
        "images": [
          "https://random.dog/4f60ab9f-6ab2-414c-823e-c36f1a435485.jpg",
          "https://random.dog/4fe9272e-003d-4d7b-81e5-bcd61c59b188.JPG",
          "https://random.dog/504cfde8-0256-4d6d-9f4c-ccc0e76e2c04.jpg"
        ]
      },
      {
        "name": "Belle",
        "breed": "Beagle cross",
        "gender": "Female",
        "age": "5Yrs (approx)",
        "animalID": 26601,
        "vaccinationStatus": "vaccinated",
        "location": "Kenton county",
        "availableForAdoption": true,
        "type": "dog",
        "additionalDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante tellus, sagittis at urna sit amet, faucibus faucibus lacus. Suspendisse rutrum nisl in augue convallis sollicitudin. Quisque nulla risus, ultrices vitae sollicitudin quis, pellentesque a ligula.",
        "images": [
          "https://random.dog/53c82aed-03f1-4df0-bd44-f3758cd5c6d2.JPG",
          "https://random.dog/54876759-47df-4e09-b7d0-80476e658d89.jpg",
          "https://random.dog/54d03670-314a-4700-88e8-2d6452f7cf84.jpg"
        ]
      },
      {    "name": "Annabell",    
      "breed": "Boxer mixed Pit Bull",    
      "sex": "Female",    
      "age": "7Yrs 5Mths 3Wks (approx)",    
      "animalID": "22382",    
      "vaccinationStatus": "vaccinated",    
      "location": "Kenton county",    
      "availableForAdoption": "yes",    
      "type": "dog",    
      "additionalDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante tellus, sagittis at urna sit amet, faucibus faucibus lacus. Suspendisse rutrum nisl in augue convallis sollicitudin. Quisque nulla risus, ultrices vitae sollicitudin quis, pellentesque a ligula.",    
      "images": [      
        "https://random.dog/ffa35fd1-fbfd-41a6-a7cd-99f9b8057ceb.jpg",      
        "https://random.dog/ffd44f07-7de4-4b8e-8582-8f90fb873ba8.gif",      
        "https://random.dog/fffc1d21-d5a4-4706-bbe0-d60e62d92bec.jpg"    
        ]
    },
    {
        "name": "Kimbo",
        "breed": "Boxer mixed Mastiff",
        "sex": "Male",
        "age": "2Yrs 5Mths 3Wks (approx)",
        "animalID": "23879",
        "vaccinationStatus": "vaccinated",
        "location": "Kenton county",
        "availableForAdoption": "yes",
        "type": "dog",
        "additionalDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante tellus, sagittis at urna sit amet, faucibus faucibus lacus. Suspendisse rutrum nisl in augue convallis sollicitudin. Quisque nulla risus, ultrices vitae sollicitudin quis, pellentesque a ligula.",
        "images": [
        "https://random.dog/fea951f8-40ed-4114-8e22-387f3d189f9f.JPG",
        "https://random.dog/fefd192a-3a64-4107-aa71-99e79d6d63e5.JPG",
        "https://random.dog/ff0b26d5-0ea3-4971-b2cf-9f904f301eef.jpg"
        ]
    },
    
]