import React from "react";
import { Grid, Image } from "semantic-ui-react";

const PictureBanner = () => (
  <Grid>
    <Grid.Row columns={8}>
      <Grid.Column>
        <Image
          centered
          size="tiny"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZ6oVG7Lgrmwxyy2jTe9PYjerLolmiuurR2IYg_Si9iYnRhW6"
        />
      </Grid.Column>

      <Grid.Column>
        <Image
          centered
          size="tiny"
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/vintage-world-war-two-poster-john-malone.jpg"
        />
      </Grid.Column>
      <Grid.Column>
        <Image
          centered
          size="tiny"
          src="https://images-na.ssl-images-amazon.com/images/I/816uryoec8L._SY679_.jpg"
        />
      </Grid.Column>
      <Grid.Column>
        <Image
          centered
          size="tiny"
          src="https://worldwarera.com/images/2x/normal/playing-for-keeps.jpg"
        />
      </Grid.Column>
      <Grid.Column>
        <Image
          centered
          size="tiny"
          src="https://ih0.redbubble.net/image.375241272.0995/flat,550x550,075,f.u3.jpg"
        />
      </Grid.Column>
      <Grid.Column>
        <Image
          centered
          size="tiny"
          src="http://www.nocgms.com/al/media/World-War-Two-Posters/06.jpg"
        />
      </Grid.Column>

      <Grid.Column>
        <Image
          centered
          size="tiny"
          src="https://i.pinimg.com/originals/0d/39/c7/0d39c7bf9c4bff7b76fd2472cc13a73a.jpg"
        />
      </Grid.Column>
      <Grid.Column>
        <Image
          centered
          size="tiny"
          src="https://i.pinimg.com/originals/3a/8e/0d/3a8e0ddbbcce44263f64657bc1af1811.png"
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default PictureBanner;
