<template>
  <BlockViewer header="Leaflet" :code="code">
    <div style="height: 70vh">
      <client-only>
        <l-map :zoom="13" :center="[22.630409, 120.298343]" :options="{ contextmenu: true }">
          <l-tile-layer ref="layer" url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

          <v-marker-cluster>
            <l-marker
              v-for="(marker, index) in markers"
              ref="markers"
              :key="index"
              :lat-lng="marker.position"
              @mouseover="$refs.markers[index].mapObject.openPopup()"
              @mouseleave="$refs.markers[index].mapObject.closePopup()"
              @click="$refs.mapShowDetailDialogComponent.showDetail(marker)"
              @contextmenu="$refs.mapAddToFavoriteDialogComponent.showAddToFavorite(marker)"
            >
              <l-icon :icon-size="[40, 40]" :icon-url="$_r('/images/primevue-logo.svg')" />

              <l-popup>
                {{ marker.name }}
              </l-popup>
            </l-marker>
          </v-marker-cluster>
        </l-map>
      </client-only>
    </div>

    <MapShowDetailDialogComponent ref="mapShowDetailDialogComponent" />
    <MapAddToFavoriteDialogComponent ref="mapAddToFavoriteDialogComponent" />
  </BlockViewer>
</template>

<script setup>
const markers = [
  {
    name: 'marker1',
    position: [22.630409, 120.298343]
  },
  {
    name: 'marker2',
    position: [22.630459, 120.298393]
  }
]

const code = `const markers = [
  {
    name: 'marker1',
    position: [22.630409, 120.298343]
  },
  {
    name: 'marker2',
    position: [22.630459, 120.298393]
  }
]

<div style="height: 70vh">
  <client-only>
    <l-map :zoom="13" :center="[22.630409, 120.298343]" :options="{ contextmenu: true }">
      <l-tile-layer ref="layer" url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

      <v-marker-cluster>
        <l-marker
          v-for="(marker, index) in markers"
          ref="markers"
          :key="index"
          :lat-lng="marker.position"
          @mouseover="$refs.markers[index].mapObject.openPopup()"
          @mouseleave="$refs.markers[index].mapObject.closePopup()"
          @click="$refs.mapShowDetailDialogComponent.showDetail(marker)"
          @contextmenu="$refs.mapAddToFavoriteDialogComponent.showAddToFavorite(marker)"
        >
          <l-icon :icon-size="[40, 40]" :icon-url="$_r('/images/primevue-logo.svg')" />

          <l-popup>
            Marker{{ index }}
          </l-popup>
        </l-marker>
      </v-marker-cluster>
    </l-map>
  </client-only>
</div>

<MapShowDetailDialogComponent ref="mapShowDetailDialogComponent" />
<MapAddToFavoriteDialogComponent ref="mapAddToFavoriteDialogComponent" />`
</script>
