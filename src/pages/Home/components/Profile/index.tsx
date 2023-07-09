import { useEffect, useState } from 'react'
import { ArrowSquareOut, Buildings, GithubLogo } from '@phosphor-icons/react'
import { AxiosResponse } from 'axios'

import { api } from '../../../../lib/axios'

import { BioContainer, Image, ProfileContainer, InfoTags, Tag } from './styles'

interface UserInfoType {
  avatar_url: string
  html_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
}

export function Profile() {
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    avatar_url: '',
    html_url: '',
    name: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
  })

  useEffect(() => {
    async function loadUserInfo() {
      const response: AxiosResponse<UserInfoType> = await api.get(
        'users/gabrielpapke',
      )

      setUserInfo(response.data)
    }

    loadUserInfo()
  }, [])

  return (
    <ProfileContainer>
      <Image src={userInfo.avatar_url} alt="" />

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

        <p>{userInfo.bio}</p>

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
