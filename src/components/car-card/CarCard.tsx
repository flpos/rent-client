import React from 'react';
import {
  Card as MUICard,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';

type Props = {
  id: string;
  brand: string;
  model: string;
  year: number;
  imageUrl: string;
};

const Card: React.FC<Props> = ({ id, brand, model, year, imageUrl }) => {
  const styles = useStyles();

  return (
    <MUICard className={styles.card}>
      <CardMedia
        className={styles.image}
        image={imageUrl}
        title={`${year} ${brand} ${model} car`}
      />
      <CardContent className={styles.content}>
        <Typography>
          Brand: <span>{brand}</span>
        </Typography>
        <Typography>
          Model: <span>{model}</span>
        </Typography>
        <Typography>
          Year: <span>{year}</span>
        </Typography>
        <a href={`/car/${id}`}>Details</a>
      </CardContent>
    </MUICard>
  );
};

export default Card;
