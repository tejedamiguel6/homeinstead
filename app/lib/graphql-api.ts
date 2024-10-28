// these normally wouldbt be pushed into a repo but for
// testing/quick instalment i commented out the env variables

//***** CONTENTFUL VARIABLES *****

// spaceID= "sbm367pnrc6y"
// accessToken = "LS7MVSAI-5IMqlZZ49JymOJDkFgh68Ha9Jr5IL0REDM"
// preview_access_token = "Vuq6CqsqIyhcqGt9Kdh2TTgSPvvXaY8gbHTptSoN2gA"

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function exctractData(fetchResponse: any) {
  return fetchResponse?.data
}

// in a production project we would
// seperate these into different files

export async function homePageSection_one() {
  const section_one = await fetchGraphQL(`
    query SECTION__1 {
        sectionOne(id: "BmkgYvAiLMblSfc5wxtNJ") {
        headline
        body {
         json
        }
         image {
      title
      description
      url
      width
      height
    }
    }
}`)
  return exctractData(section_one)
}

export async function homePageSection_two() {
  const section_two = await fetchGraphQL(`
   query SECTION_TWO {
  sectionTwo(id: "6dfgj7qu9nnQdkRVXrRPtU") {
    headline
    text {
      json
    }
    image {
      title
      description
      url
      width
      height
    }
  }
}`)
  return exctractData(section_two)
}

export async function homePageSection_three() {
  const section_three = await fetchGraphQL(`
    query SECTION_THREE {
        sectionThree(id: "3Al2CS4IaVkTLfqkGtzpkh") {
        heading
        imagesCollection {
            items {
                title
                description
                url
                width
                height
            }
        }
    }
}
`)

  return exctractData(section_three)
}
