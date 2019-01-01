# streeteasy-listing-proxy-server-jte
> Proxy Server For StreetEasy Style Item Listing Page

This project contains the source for a single listing page inspired by the New York City real estate website StreetEasy.com

In this project, a team of developers contributed components which make up the full page. Each component works on it's own as complete fullstack application and this proxy server combines each component into a complete listing page in the style of a service oriented or microservice architecture.

## Related Repositories

- My Component
  - [Image Carousel Component](https://github.com/Team-Elysium/image-carousel-component)

- Colleagues' Components
  - [Listing Details Component](https://github.com/Team-Elysium/listing-details)
  - [Listing Description Component](https://github.com/Team-Elysium/Description-Amenities-About_the_Building)
  - [Similiar Listings Component](https://github.com/Team-Elysium/Similar-Listings-Recommendations)

## Table of Contents

1. [Usage](https://github.com/hackreactor/hrnyc19-front-end-capstone#Usage)
2. [Development](https://github.com/hackreactor/hrnyc19-front-end-capstone#development)

## Usage

This project depends on four individual services running separately. Each service provides a front end component consisting of a React component transpiled into a ES2015 javascript `bundle.js` file as well as an API that provides content to the component. 

For development it is possible to clone and serve each individual component on a different port of a development machine. In production, each service would likely be isolated to an independent virtual machine or container.

## Development

### Installing Dependencies

From within the root directory:

```
npm install
```

### Connnecting to Services

The file `service_urls.example.json` contains a template for entering URLS relative to each service. Use it to create a new file `service_urls.json` at the top level of the project repo.