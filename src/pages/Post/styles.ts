import styled from 'styled-components'

export const PostContainer = styled.main``

export const PostHeader = styled.header`
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -5rem;
  padding: 2rem;

  margin-bottom: 2.5rem;

  .top-links {
    display: flex;
    justify-content: space-between;
    width: 100%;

    a {
      color: ${(props) => props.theme.blue};
      text-transform: uppercase;
      text-decoration: none;
      font-size: 0.75rem;
      gap: 0.5rem;
      display: flex;
      align-items: center;
      font-weight: 700;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`
export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-title']};
  padding-top: 1.25rem;
`

export const PostBody = styled.div``
