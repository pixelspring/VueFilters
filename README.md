# Vue Filters

## Percentage:
#### Converts a value to a percentage

`Vue.filter('percentageFormat', require('./filters/percentageFormatter'));`

Default (2 decimal places)  
`{{ amount | percentageFormat }}`

Specify decimal places  
`{{ amount | percentageFormat(4) }}`


## Human Readable File Sizes
#### Converts bytes to human readable file sizes (KB, MB, GB etc)

`Vue.filter('humanFileSize', require('./filters/humanFileSize'));`

Default  
`{{ filesizeInBytes | humanFileSize }}`


## Truncate Text
#### Truncate text to a given length & append ellipsis

`Vue.filter('truncateText', require('./filters/truncateText'));`

Default  
`{{ textToTruncate | truncateText(100) }}`