import React from 'react'


import get from 'lodash/get'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import 'typeface-montserrat'
import 'typeface-merriweather'
import { rhythm } from '../utils/typography'
import { Button } from 'react-buttons'

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
      <div style={{border: "1px solid black"}}>
        <div style={{margin: rhythm(1/4)}}>
          <p>Filter by Cuisines</p>
          <div>
            <Button faIcon="plus" onClick={this.props.toggle}>Toggle All Cuisines</Button>
          </div>
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
