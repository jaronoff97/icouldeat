import React from 'react'


import get from 'lodash/get'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import 'typeface-montserrat'
import 'typeface-merriweather'
import { rhythm } from '../utils/typography'

class FilterBox extends React.Component {

  render() {
    const gqlData = get(this, 'props.data.allMarkdownRemark')
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Handle = Slider.Handle;

    const jsUcfirst = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handle = (props) => {
      const { value, dragging, index, ...restProps } = props;
      return (
        <Tooltip
          prefixCls="rc-slider-tooltip"
          overlay={value}
          visible={dragging}
          placement="top"
          key={index}
        >
          <Handle value={value} {...restProps} />
        </Tooltip>
      );
    };
    // const cuisines = gqlData.map(el=>{el.node.frontmatter.cuisine})

    return (
      <div style={{backgroundColor: "#c9d3e2", color: "#191919"}}>
        <div style={{margin: rhythm(1/4)}}>
          <p>Filter by Cuisines</p>
          <CheckboxGroup 
            name="cuisines" 
            value={this.props.currentCuisines}
            onChange={this.props.onCuisineChange}>
            {this.props.cuisines.map((cuisine) => {
              return(
                <div key={cuisine}>
                  <label><Checkbox value={cuisine}/> {jsUcfirst(cuisine)}</label>
                </div>
                )
            })}
          </CheckboxGroup>
          <p>Minimum Rating</p>
          <Slider min={0} max={10} defaultValue={0} onChange={this.props.onChange} handle={handle} />
        </div>
      </div>
    )
  }
}

export default FilterBox
