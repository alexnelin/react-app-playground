import { createGlobalStyle } from 'styled-components';

const SliderStyles = createGlobalStyle`
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    padding-bottom: 30px;
  }
  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;
    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
    transition: all .3s, opacity .5s;
    @media screen and (max-width: 767px) {
      transition: all .3s, opacity .3s;
    }
    &:not(.slick-active), &:not(.slick-current) {
      opacity: 0;
    }
    &.slick-cloned:not(.slick-active) {
      opacity: 1;
    }
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
  .slick-track {
    margin: auto;
  }
  .slick-prev,
  .slick-next {
    top: 8%;
    position: absolute;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    outline: none;
    border: 0;
    background-color: transparent;
    background-size: contain;
    font-size: 0;
    cursor: pointer;
    ${({ theme }) => theme.mediaTablet`
      top: 5%;
    `};
    @media screen and (max-width: 767px) {
      top: 25%;
      width: 30px;
      height: 30px;
    }
  }
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
  .slick-prev {
    left: 0;
    [dir="rtl"] & {
      left: auto;
      right: 0;
    }
    &:before {
      content: "←";
      [dir="rtl"] & {
        content: "→";
      }
    }
  }
  .slick-next {
    right: 0;
    [dir="rtl"] & {
      left: 0;
      right: auto;
    }
    &:before {
      content: "→";
      [dir="rtl"] & {
        content: "←";
      }
    }
  }
  .slick-dots {
    margin: 0;
    list-style: none;
    display: block;
    text-align: center;
    padding: 0;
    width: 100%;
    li {
      position: relative;
      display: inline-block;
      cursor: pointer;
      button {
        display: block;
        padding: 0 5px;
        background: none;
        outline: none;
        line-height: 0px;
        font-size: 0px;
        color: red;
        cursor: pointer;
        border: 0;
        outline: 0;
        &:before {
          content: "";
          display: block;
          height: 13px;
          width: 13px;
          border: 1px solid #fff;
          box-sizing: border-box;
          border-radius: 50%;
          background: transparent;
          transition: all 0.1s ease;
        }
      }
      &.slick-active {
        button:before {
          background: #fff;
        }
      }
      &:not(.slick-active) {
        button:hover {
          &:before {
            background: transparent;
          }
        }
      }
    }
  }
  ${({ customCss }) => (customCss ? customCss : '')};
`;
export default SliderStyles;
