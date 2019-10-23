import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import DeleteSVG from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';

class ImageLightBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      photos: []
    };
  }

  componentWillReceiveProps(nextProps) {
    let photos = [];
    nextProps.photos.map((photo) => {
      photos.push(photo.dataUri);
    });
    this.setState({
      photos,
      photoIndex: nextProps.clickedPictureIndex
    });
  }


  render() {
    const { photoIndex, photos } = this.state;
    const { isOpen, onPictureDelete } = this.props
    return (
      <div>
        {isOpen && length > 0 && (
          <div>
            <Lightbox
              mainSrc={photos[photoIndex]}
              nextSrc={photos[(photoIndex + 1) % photos.length]}
              prevSrc={photos[(photoIndex + photos.length - 1) % photos.length]}
              onCloseRequest={() => this.props.onClose()}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + photos.length - 1) % photos.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % photos.length,
                })
              }
            />
            <IconButton
              onClick={() => { onPictureDelete(photos[photoIndex].id); }}
              style={{
                position: 'fixed',
                top: '2px',
                right: '139px',
                zIndex: '100000'
              }}
            >
              <DeleteSVG color="white" />
            </IconButton>
          </div>
        )}
      </div>
    );
  }
}

ImageLightBox.propTypes = {
  photos: PropTypes.array,
  clickedPictureIndex: PropTypes.number,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onPictureDelete: PropTypes.func
};

export default ImageLightBox;
