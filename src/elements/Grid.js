import styled from 'styled-components'

const Grid = (props) => {
  const { is_container, children, is_flex, flex_align, flex_justify, height, _className } = props
  const styles = {
    is_container,
    is_flex,
    flex_align,
    flex_justify,
    height,
    className: _className
  }

  return (
    <GridBox {...styles}>
      { children }
    </GridBox>
  )
}

Grid.defaultProps = {
  is_container: false, 
  is_flex: false,
  flex_align: false,
  flex_justify: false,
  height: 'auto'
}


const GridBox = styled.div`
  ${(props) => props.is_container && `max-width: 1264px; margin: 0 auto;`}
  ${(props) => props.is_flex && `display: flex;`}
  ${(props) => props.flex_align && `align-items: ${props.flex_align};`}
  ${(props) => props.flex_justify && `justify-contents: ${props.flex_justify};`}
  height: ${(props) => props.height && props.height};
`

export default Grid