import React from "react";
import { Cards } from "./cards/index";
import "./table.scss";

export const Table = () => {
  return (
    <div className="container__table">
      <Cards
        name="Echo Dot (3rd Gen)"
        image_url="https://images-na.ssl-images-amazon.com/images/I/61cSwIDSVbL._AC_SX466_.jpg"
        description="Smart speaker with Alexa - Sandstone"
      />
      <Cards
        name="Echo (4th Gen)"
        image_url="https://images-na.ssl-images-amazon.com/images/I/61zoTefZ47L._AC_SX466_.jpg"
        description="With premium sound, smart home hub, and Alexa |Charcoal with TP-Link Smart Plug (Certified for Humans product)"
      />
      <Cards
        name="Echo Dot (4th Gen)"
        image_url="https://images-na.ssl-images-amazon.com/images/I/51c%2BvutbsQL._AC_.jpg"
        description="Smart speaker with clock and Alexa | Glacier White with LIFX Smart Bulb (Wi-Fi)"
      />
      <Cards
        name="Echo Show 5"
        image_url="https://images-na.ssl-images-amazon.com/images/I/716neMnDXXL._AC_SX466_.jpg"
        description="Smart display with Alexa – stay connected with video calling - Charcoal"
      />
      <Cards
        name="iHome iBT158 Smart"
        image_url="https://images-na.ssl-images-amazon.com/images/I/81XIBlUgolL._AC_SY355_.jpg"
        description=" Bluetooth Speaker With Alexa Built-In and Color Changing LED Lights - Perfect Portable Audio Device for Parties, Outdoors, and Other Events"
      />
      <Cards
        name="Tile Sticker (2020) 2-Pack"
        image_url="https://images-na.ssl-images-amazon.com/images/I/81h-IQcXXAL._AC_SX569_.jpg"
        description="with Echo Dot (3rd Gen) Amazon Smart Speaker with Alexa"
      />
      <Cards
        name="All-new Echo (4th Gen)"
        image_url="https://images-na.ssl-images-amazon.com/images/I/71XLwnipcBL._AC_SX425_.jpg"
        description="with Philips Hue Bulb | Twilight Blue"
      />
      <Cards
        name="All-new Ring Video Doorbell 3 with Echo Dot"
        image_url="https://m.media-amazon.com/images/I/518e7bE+KRL._AC_UY218_.jpg"
        description="This bundle includes the all-new Ring Video Doorbell 3 and an Echo Dot."
      />
      <Cards
        name="Kasa Smart Dimmer Switch by TP-Link"
        image_url="https://images-na.ssl-images-amazon.com/images/I/71oZlpY3p%2BL._AC_SY355_.jpg"
        description="Single Pole, Needs Neutral Wire,WiFi Light Switch for LED Lights, Works with Alexa and Google Assistant,UL Certified"
      />
      <Cards
        name="Echo Show (2nd Gen)"
        image_url="https://images-na.ssl-images-amazon.com/images/I/51W9wBDHZTL._AC_SX425_.jpg"
        description="with Echo Show Adjustable Stand and TP-Link simple set up smart plug"
      />
    </div>
  );
};
