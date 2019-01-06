# streeteasy-listing-proxy-server-jte
> Real estate listing page based on a client side microservice architecture.

![listing-screen-capture](documentation/images/listing-screen-capture.gif)

This project contains the source for a single listing page inspired by the New York City real estate website StreetEasy.com

In this project, a team of four developers contributed components which make up the full page. Each component works on its own as a complete fullstack application and this project combines each component into a complete listing page in the style of a service oriented or microservice architecture.

## Related Repositories

- Contributed Component
  - [Image Carousel Component](https://github.com/Team-Elysium/image-carousel-component)

- Colleagues' Components
  - [Listing Details Component](https://github.com/Team-Elysium/listing-details)
  - [Listing Description Component](https://github.com/Team-Elysium/Description-Amenities-About_the_Building)
  - [Similiar Listings Component](https://github.com/Team-Elysium/Similar-Listings-Recommendations)

## Project Architecture

![listing-page-architecture](documentation/images/listing-page-architecture.png)

## Development

### Installing Dependencies

From within the root directory:

```
npm install
```

### Connnecting to Services

The file `service_urls.example.json` contains a template for entering URLS relative to each service. Use it to create a new file `service_urls.json` at the top level of the project repo.

## Authors

- **Jared Ellison** - [jaredellison.net](http://jaredellison.net)

## Acknowledgments

- **Project Team** - *Each contributed similar components to full listing page*
  - [Sujin Lee](https://github.com/slee1016)
  - [Austin Joo](https://github.com/AustinJoo)
  - [Muhammad Mosaad](https://github.com/mowithafro)