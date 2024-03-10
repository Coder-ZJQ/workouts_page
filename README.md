## note1: use v2.0 need change vercel setting from Gatsby to Vite

## note2: 2023.09.26 garmin need secret_string(and in Actions) get `python run_page/garmin_sync.py ${secret_string}` if cn `python run_page/garmin_sync.py ${secret_string} --is-cn`

# [Create a personal workouts home page](http://workouts.ben29.xyz)

![screenshot](https://user-images.githubusercontent.com/6956444/163125711-24d0ad99-490d-4c04-b89f-5b7fe776eb38.png)

[简体中文](README-CN.md) | English

This project is based on [running_page](https://github.com/yihong0618/running_page) and adds support for multi sports types. Follow the steps in the origin repo to deploy.

## New Features

1. support multi sports types, like Ride/Hike/Swim/Rowing
1. support new apps
   - **[Codoon（咕咚）](#codoon咕咚)** (Couldn't automate for its limitation from the server side)
   - **[Xingzhe（行者）](#xingzhe行者)**
1. support [RoadTrip(GoogleMaps)](#roadtripgooglemaps), show Road Trip on maps

## Custom your page

### Change Sports Color

- Modify Ride Color: `RIDE_COLOR` in `src/utils/const.js`

### Add Sports Type

- Modify `TYPE_DICT` & `MAPPING_TYPE` in `scripts/config.py`
- Add Type Name and add it into `RUN_TITLES` in `src/utils/const.js`
- Modify `colorFromType` & `titleForRun` in `src/utils/util.js`
- see [commit](https://github.com/ben-29/workouts_page/commit/f3a35884d626009d33e05adc76bbc8372498f317)
- or comment [here](https://github.com/ben-29/workouts_page/issues/20)

---

### Codoon（咕咚）

<details>
<summary>Get your <code>Codoon</code> data</summary>

```python
python3(python) scripts/codoon_sync.py ${your mobile or email} ${your password}
```

example：

```python
python3(python) scripts/codoon_sync.py 13333xxxx xxxx
```

> use `--with-gpx` flag to save your gpx data
>
> use `--from-auth-token` flag to login by refresh_token&user_id

![image](https://user-images.githubusercontent.com/6956444/105690972-9efaab00-5f37-11eb-905c-65a198ad2300.png)

example：

```python
python3(python) scripts/codoon_sync.py 54bxxxxxxx fefxxxxx-xxxx-xxxx --from-auth-token
```

</details>

### Xingzhe（行者）

<details>
<summary>Get your <code>Xingzhe</code> data</summary>

```python
python3(python) scripts/xingzhe_sync.py ${your mobile or email} ${your password}
```

example：

```python
python3(python) scripts/xingzhe_sync.py 13333xxxx xxxx
```

> use `--with-gpx` flag to save your gpx data
>
> use `--from-auth-token` flag to login by refresh_token&user_id

![image](https://user-images.githubusercontent.com/6956444/106879771-87c97380-6716-11eb-9c28-fbf70e15e1c3.png)

example：

```python
python3(python) scripts/xingzhe_sync.py w0xxx 185000 --from-auth-token
```

</details>

### RoadTrip(GoogleMaps)

<details>
<summary>Import KML from Google Maps</summary>

1. Create a map in [Google Maps](https://www.google.com/maps/d/) (keep the route in one Layer)
2. Export Layer to KML file
3. Rename the file to `import.kml` and place it into `scripts`
4. Modify `scripts/kml2polyline.py`, fill in the trip info

```
# TODO modify here
# trip name
track.name = "2020-10 Tibet Road Trip"
# start/end time Year-Month-Day-Hour-Minute
track.start_time = datetime(2020, 9, 29, 10, 0)
track.end_time = datetime(2020, 10, 10, 18, 0)
# total distance
distance = 4000  # KM
# total days
days = 12
# average daily distance
hours_per_day = 6
```

5. Execute in Console

```python
python3(python) scripts\kml2polyline.py
```

</details>

# Special thanks

- @[yihong0618](https://github.com/yihong0618) for Awesome [running_page](https://github.com/yihong0618/running_page), Great Thanks
- @[flopp](https://github.com/flopp) great repo [GpxTrackPoster](https://github.com/flopp/GpxTrackPoster)
- @[danpalmer](https://github.com/danpalmer) UI design
- @[shaonianche](https://github.com/shaonianche) icon design and doc
- @[geekplux](https://github.com/geekplux) Friendly help and encouragement, refactored the whole front-end code, learned a lot
- @[MFYDev](https://github.com/MFYDev) Wiki

# Recommended Forks

- @[gongzili456](https://github.com/gongzili456) for [motorcycle version](https://github.com/gongzili456/running_page)
- @[ben-29](https://github.com/ben-29) for [different types support](https://github.com/ben-29/workouts_page)
- @[geekplux](https://github.com/geekplux) for [different types support](https://github.com/geekplux/activities)

# Support

Just enjoy it~

# FAQ

- Strava Api limit

  <https://www.strava.com/settings/api>
  <https://developers.strava.com/docs/#rate-limiting>

  ```
  Strava API Rate Limit Exceeded. Retry after 100 seconds
  Strava API Rate Limit Timeout. Retry in 799.491622 seconds
  ```

- vercel git ignore gh-pages:

  you can change settings -> build -> Ignored Build Step -> Custom command

  ```bash
  if [ "$VERCEL_GIT_COMMIT_REF" != "gh-pages" ]; then exit 1; else exit 0;
  ```
