import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -5rem;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  position: relative;
  margin-bottom: 4.5rem;
`

export const Image = styled.img`
  max-width: 9.25rem;
  max-height: 9.25rem;
  border-radius: 8px;
`

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a.external {
    position: absolute;
    right: 2rem;
    top: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    text-decoration: none;
    font-weight: 700;
    color: ${(props) => props.theme.blue};
  }

  h2 {
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.6;
  }
`
export const InfoTags = styled.div`
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
`
export const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
