json.id user.id
json.username user.username
json.avatar_url asset_path(user.avatar.url)
json.followings user.followings.map(&:followee_id)
