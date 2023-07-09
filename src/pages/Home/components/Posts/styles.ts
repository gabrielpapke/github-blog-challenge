import styled from 'styled-components'

export const PostsContainer = styled.div``

export const SearchForm = styled.form`
  margin-bottom: 3rem;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const Input = styled.input`
  width: 100%;
  background: ${(props) => props.theme['base-input']};
  border: 1px ${(props) => props.theme['base-border']} solid;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};

  &::placeholder,
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme['base-label']};
  }
  &:-ms-input-placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: 2rem;
  padding-bottom: 3rem;
`

export const Item = styled.aside`
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 1.25rem;
    gap: 1rem;
  }

  header h3 a {
    text-decoration: none;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;

    &:hover {
      color: ${(props) => props.theme.blue};
    }
  }

  header span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    min-width: 4.5rem;
    text-align: right;
    padding-top: 0.2rem;
  }

  p {
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
