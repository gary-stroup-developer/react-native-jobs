import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'

import styles from './nearbyjobcard.style';
import { checkImageURL } from '../../../../utils';

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: checkImageURL(item.employer_logo) ? item.employer_logo : 'https://w7.pngwing.com/pngs/271/479/png-transparent-career-development-computer-icons-job-employment-career-coach-blue-logo-employment.png' }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard