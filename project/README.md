## Weather Blanket Big Data Project

### By Noa Lahan

The project aims to process historical weather data to hopefully see a trend, specifically in terms of global warming as it is a topic that directly affects everyone ([WWF, 2016a]) and one that I am curious about.  
The data visualisation will be in the form of an online "weather blanket" which should allow for easy trend or anomaly spotting in the data.  
A weather blanket is a long-term project which is popular in crochet and knitting communities, in which the crafter adds one new row to the blanket every day over the course of a year, alternating the color of the current row based on that day's temperature. The end result produces a full length blanket with a variety of colors that creates a visual way to see the year's temperature changes ([Bollanos, 2024]). Some examples (taken from a quick [Pinterest search]):

![Example 1][Pin1] ![Example 2][Pin2] ![Example 3][Pin3] ![Example 4][Pin4]

Instead of a row representing a day and the blanket representing a year, the data collects 80 years worth of weather information, each row being a year, and each year will be seperated into its 365 days (366 on leap years).

---

[Bollanos, 2024]: https://www.handylittleme.com/temperature-blanket-patterns/
[Pin1]: img/pin1.png "Figure 1"
[Pin2]: img/pin2.png "Figure 2"
[Pin3]: img/pin3.png "Figure 3"
[Pin4]: img/pin4.png "Figure 4"
[Pinterest search]: https://www.pinterest.co.uk/search/pins/?q=weather%20blanket&rs=typed
[WWF, 2016a]: https://www.wwf.org.uk/climate-change-and-global-warming

#### Continued documentation in `main.ipynb`

---

## Files

- `img` folder holds all visuals used in documentation
- all `.csv` files are contain the cleaned data for their respective country
- `index.html` holds the visualisation website's HTML code - **Run this to see the visualisation**
- `main.ipynb` has the data processing code and the project's documentation - **Read this to know more about project**
- `script.js` holds the visualisation website's JS code
- `style.css` holds the visualisation website's CSS code
- `videoPresentation.mp4` is a quick video presentation of the project