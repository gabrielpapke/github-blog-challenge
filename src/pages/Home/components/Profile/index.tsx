import { useEffect, useState } from 'react'
import { ArrowSquareOut, Buildings, GithubLogo } from '@phosphor-icons/react'

import { api } from '../../../../lib/axios'

import { BioContainer, Image, ProfileContainer, InfoTags, Tag } from './styles'

export function Profile() {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    async function loadUserInfo() {
      const response = await api.get('users/gabrielpapke')

      setUserInfo(response.data)
    }

    loadUserInfo()
  }, [])

  console.log(userInfo)

  return (
    <ProfileContainer>
      <Image src={userInfo.avatar_url} />

      <BioContainer>
        <a
          target="_blank"
          href={userInfo.html_url}
          className="external"
          rel="noreferrer"
        >
          <span>GITHUB</span>

          <ArrowSquareOut size={12} weight="bold" />
        </a>

        <h2>{userInfo.name}</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente
          iste fugit facilis, non excepturi porro? Sapiente consequuntur nemo
          ipsum!
        </p>

        <InfoTags>
          <Tag>
            <GithubLogo size={18} />

            <span>{userInfo.login}</span>
          </Tag>

          <Tag>
            <Buildings size={18} />

            <span>{userInfo.company}</span>
          </Tag>

          <Tag>
            <Buildings size={18} />

            <span>
              {userInfo.followers === 1
                ? `${userInfo.followers} seguidor`
                : `${userInfo.followers} seguidores`}
            </span>
          </Tag>
        </InfoTags>
      </BioContainer>
    </ProfileContainer>
  )
}
