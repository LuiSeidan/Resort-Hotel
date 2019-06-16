import React, { Component } from "react";
import Title from "../components/Title";
import { FaHiking, FaCocktail, FaBeer, FaShuttleVan } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, quia!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hicking",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, quia!"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, quia!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, quia!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
